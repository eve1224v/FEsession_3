/*
<<실습 1>>
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

function Profile({ name, age }) {
  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
}

export default Profile;
