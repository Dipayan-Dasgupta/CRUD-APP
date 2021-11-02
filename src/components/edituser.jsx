import { FormGroup, InputLabel,FormControl,Input,Button,makeStyles, Typography } from "@material-ui/core";
import react , {useEffect, useState} from "react" ;
import { Change, getUsers } from "../Service/api";
import { useHistory , useParams } from "react-router-dom";

const useStyle = makeStyles({
   container: {
       width : '50%',
       margin : '5% 0 0 25%',
       '& > *':{
           marginTop : 20
       }
   }
})

const initialvalues = {
    name: '',
    username: '',
    email: '',
    contact: ''
}

const EditUser = () =>{
    const [user , setuser] = useState(initialvalues);
    const {name , username , email , contact} = user ;
    const { id } = useParams() ;
    const classes = useStyle();
    const history = useHistory() ;

    useEffect(() => {
       loaduserdata() ;
    },[])

    const loaduserdata = async () => {
       const response = await getUsers(id) ;
       setuser(response.data) ;
    }

    const onvaluechange = (e) => {
        setuser({...user,[e.target.name]:e.target.value })
    }
    const Edituserdetail = async () => {
        await Change(id , user) ;
        history.push('../all') ;
    }
    return(
        <FormGroup className = {classes.container}>
            <Typography variant = "h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name = 'name' value = {name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Usename</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name = 'username' value = {username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name = 'email' value = {email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Contact no</InputLabel>
                <Input onChange={(e) => onvaluechange(e)} name = 'contact' value={contact}/>
            </FormControl>
            <Button variant = "contained" onClick={() => Edituserdetail()} color = "primary">Edit User</Button>
        </FormGroup>
    )
}
export default EditUser ;