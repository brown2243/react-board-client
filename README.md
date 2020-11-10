# 학원에서 진행하는 React part.2 수업

수업내용(11/09)
yarn 설치
yarn은 패키지 관리프로그램이고 npm이 있음에도 쓰는 이유는 빠르다 함

cd로 폴더위치 정해서
create-react-app(생성명령) react-board-client(폴더이름)

쓸모없는 파일 정리 후
모듈설치
> yarn add axios
> yarn add @material-ui/core
> yarn add @material-ui/icons (s 추가해야댐)
> yarn add react-router-dom

axios : REST API 사용 라이브러리
material : 머티리얼 템플릿 UI 라이브러리
안드로이드에서 쓰려고 구글에서 만듬(부트스트랩과 비슷하나 한단계 위)
react-router-dom : 화면 전환 라우팅 라이브러리
페이지 전환될 때 필요

ApiService.js 작업할 때
const API_URL='http://localhost:8090/users' 에서 const가 궁금해짐

변수선언에는 var, let, const 가 있다
var는 변수가 있음에도 재선언시 에러가 발생하지 않는 문제가 있다.
그래서 let과 const는 변수 재선언이 되지 않는다.
둘의 차이점은 let은 변수 재할당이 가능하나 const는 재선언, 재할당 둘다 불가능
변수 호이스팅
호이스팅(Hoisting)이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.
자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅한다.
하지만, var 로 선언된 변수와는 달리 let 로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.
ex code)_
            console.log(foo); // undefined
	var foo;
	console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
	let bar;
이는 let 로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문이다.
참고로, 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성되는데

var 으로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 
하지만 let 로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

// 스코프의 선두에서 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo); // undefined
var foo;
console.log(foo); // undefined
foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1

// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.

console.log(foo); // ReferenceError: foo is not defined
let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1

그렇다면, 어떤 변수 선언 방식을 써야할까?
변수 선언에는 기본적으로 const를 사용하고, 재할당이 필요한 경우에 한정해 let 을 사용하는 것이 좋다.
그리고 객체를 재할당하는 경우는 생각보다 흔하지 않다. const 를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전하다.
재할당이 필요한 경우에 한정해 let 을 사용한다. 이때, 변수의 스코프는 최대한 좁게 만든다.
재할당이 필요 없는 상수와 객체에는 const 를 사용한다.
참조 https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90

react page life cycle
https://ko.reactjs.org/docs/state-and-lifecycle.html

mysql 세팅하고 끝

11/10
스프링에 서버타임존 설정하고 프론트 백앤드 연결 후 화면 만드는 중