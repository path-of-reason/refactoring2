// * 상수 이름바꾸기

// 2. 상수(또는 클라이언트가 볼 때 상수처럼 작용하는 대상)의 이름은 캡슐화하지 않고도 복제방식으로 점진적으로 바꿀 수 있다. 상수가 다음처럼 선언되어 있다고 하자.

const cpyNm = "애크미 구스베리"

// 먼저 원본의 이름을 바꾼 후, 원본의 원래 이름(기존 이름)과 같은 복제본을 만든다.

const companyName = "애크미 구스베리"
const cpyNm = companyName

// 이제 기존 이름(복제본)을 참조하는 코드들을 새 이름으로 점진적으로 바꿀 수 있다. 다 바꿨다면 복제본을 삭제한다. 나는 기존 이름을 삭제했다가 테스트에 실패하면 되돌리는 방식보다 (앞의 코드처럼) 새 이름으로 선언한 다음 기존 이름에 복사하는 방식이 조금이라도 쉽다면 후자를 선택한다.

// 이 방식은 상수는 물론, 클라이언트가 볼 때 읽기전용인 변수(가령 자바스크립트의 익스포트한 변수)에도 적용할 수 있다.