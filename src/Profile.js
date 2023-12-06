import img from './profile.png'
const Profile=()=>{
    const person={
        name:'Asia',
        email:'asia@gmail.com',
        age:21
      }

    return(
    <>
<img src={img} alt='imageee' style={{width:'200px'}} />
<p style={{fontSize:'20px'}}>{person.name}</p>
<p>{person.email}</p>
<p>{person.age}</p>
    </>
    )
}
export default Profile