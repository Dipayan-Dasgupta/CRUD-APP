import { FormGroup, InputLabel,FormControl,Input,Button,makeStyles, Typography } from "@material-ui/core";
import react , {useState} from "react" ;
import { Adduser } from "../Service/api";
import { useHistory } from "react-router-dom";

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

const AddUser = () =>{
    const [user , setuser] = useState(initialvalues);
    const {name , username , email , contact} = user ;
    const classes = useStyle();
    const history = useHistory() ;

    const onvaluechange = (e) => {
        setuser({...user,[e.target.name]:e.target.value })
    }
    const adduserdetail = async () => {
        await Adduser(user) ;
        history.push('./all') ;
    }
    return(
        <FormGroup className = {classes.container}>
            <Typography variant = "h4">Add User</Typography>
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
            <Button variant = "contained" onClick={() => adduserdetail()} color = "primary">Add User</Button>
        </FormGroup>
    )
}
export default AddUser ;