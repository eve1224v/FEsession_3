/*
1. 구조분해할당 사용 X 
function Profile(props) {
  return (
    <div>
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
    </div>
  );
}

export default Profile;
*/


/*2. 구조분해할당 사용 O */
function Profile({ name, age }) {
  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
}

export default Profile;
