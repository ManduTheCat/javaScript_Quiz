const questionPEl = document.querySelector(".question-p")
const questionEl = document.querySelector(".question")
const choicesEl = document.querySelector(".choices")
const porgressEL = document.querySelector(".meter")
const parentEl = document.querySelector(".parent")
const scoreEL = document.querySelector(".score")

const quirys = ["What is 1 + 1?", "What is 2 + 3?", " What is 3 + 7?", "What is 9 + 9?"] // 랜덤으로 숫자를 돌릴수 없을까?
const selectSet = [[2,4,6,8],[1,5,10,15],[88,99,10,100],[57,42,41,18]] //랜덤하게 바뀌?<- 랜덤으로 섞기 <- 정답 하나 넣고 나머지 랜덤
const setAlph = [`A`, `B`, `C`, `D`]
const ans = ['2','5',`10`, `18`] // 랜덤하게 바꾸면 이것도 바뀐다 <-정답 넣기
let pbCount = 0
let point = 0

const createChileInnerAndLoading = (tagArea) =>{
	for(let i = 1; i < 5; i++ ){
		let newChild = document.createElement("div")
		newChild.setAttribute('class', 'child' + i);
		newChild.setAttribute("onclick", `checkAnswer(this, pbCount)`)

		let newInnerChild = document.createElement("div")
		newInnerChild.setAttribute("class", "child-inner")
		newInnerChild.innerHTML = setAlph[i-1]

		let newSpan = document.createElement("span");
		newSpan.setAttribute("class", "select"+setAlph[i-1])

		tagArea.appendChild(newChild)
		newChild.appendChild(newInnerChild)
		newChild.appendChild(newSpan)
	}
}

const loadingLastPage = ()=>{
	const firstContainerEL = document.querySelector(".first-container")
	const secondContainerEl = document.querySelector(".second-container")
	firstContainerEL.remove()
	secondContainerEl.remove()

	const resultTag = document.createElement("h1");
	resultTag.setAttribute("class", "result")
	resultTag.textContent=`Total score: ${point}`

	const anchorTag = document.createElement("a");
	anchorTag.setAttribute("href", "quiz.html")

	const startBtn = document.createElement("button")
	startBtn.setAttribute("class", "start-btn")
	startBtn.innerHTML="Play Again"

	document.body.appendChild(resultTag)
	document.body.appendChild(anchorTag)
	anchorTag.appendChild(startBtn)
}


// 보기 값 할당 <span class="selectA~D">selectSet[]</span>
const loadSelcts = (pageCount) =>{
	let selectableSet = selectSet[pageCount]
	let selectP =[]
	const childELs = parentEl.children;
	for(let i = 0; i < childELs.length; i++){
		childELs[i].style.backgroundColor='transparent'
	}
	for(let i = 0; i<4; i++){
		// div innerHTML 값 오른쪽 으로 가야하는 span 으로 해결
		let spanEl = document.querySelector(`.select${setAlph[i]}`)
		selectP.push(spanEl)
	}
	if(selectP[0]!==null){
		selectP.forEach((value,index)=>{value.textContent = selectableSet[index]})
	}
}


const updatePage = () =>{
	if(pbCount > 3){
		loadingLastPage()
	}
	if(pbCount === 0){
		createChileInnerAndLoading(parentEl)
	}
	const persent = [30,50,70,100]
	porgressEL.value=persent[pbCount];
	questionPEl.textContent = `Question ${pbCount + 1}/4`
	questionEl.textContent = quirys[pbCount]
	loadSelcts(pbCount)
	pbCount += 1;
}

//클릭하면 검사 + 1초 후 로딩
const checkAnswer=(SelectedSpanEl, Pbcount)=>{

	let spanEL = SelectedSpanEl.querySelector("span")
	let input = spanEL.textContent
	let selecteAns = ans[Pbcount-1]
	if(input === selecteAns){
		console.log("same")
		point+=1
		SelectedSpanEl.style.backgroundColor= "green";
	}
	else{
		console.log("false")
		SelectedSpanEl.style.backgroundColor= "red";
	}
	scoreEL.textContent = point;
	setTimeout(()=>(updatePage()), 1000)
}
