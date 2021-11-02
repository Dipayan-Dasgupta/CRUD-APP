import {TableCell , TableRow , Table , TableHead , TableBody, makeStyles, Button} from "@material-ui/core" ;
import { useEffect, useState } from "react";
import { getUsers , deleteUser } from "../Service/api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  table:{
    width :'90%',
    margin : '20px 0 0 20px'
  },
  thead : {
    '& > *':{
      background : '#000000',
      color : '#FFFFFF',
      fontSize : 20
    }
  },
  row:{
    '& > *':{
      fontSize : 20
    }
  }
})

const Alluser = () => {

  const [users , setUsers] = useState([]) ;
  const classes = useStyle() ;

  useEffect(() => {
     getAlluser() ;
  } , [])
  const getAlluser = async () => {
    const response = await getUsers() ;
    console.log(response.data);
    setUsers(response.data) ;
  } 

  const deleteuserdata = async (id) => {
    await deleteUser(id) ;
    getAlluser() ;
  }
  return(
      <Table className ={classes.table}>
        <TableHead>
          <TableRow className = {classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact no</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map(user => (
              <TableRow className = {classes.row}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.contact}</TableCell>
                <TableCell>
                  <Button variant = "contained" color = "primary" style ={{margin :10}} component = {Link} to = {`/edit/${user.id}`}>Edit</Button>
                  <Button variant = "contained" color = "secondary" onClick={() => deleteuserdata(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>  
            ))
          }
        </TableBody>
      </Table>
  )
}
export default Alluser ;