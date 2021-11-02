
import { Box , makeStyles , spacing } from '@material-ui/core';
import photo from '../Assets/Images/c..jpg';
const useStyle = makeStyles({
    obj:{
        width: '70%' ,
        height: '30%'
    },
})
const Portfolio = () => {
    const classes = useStyle() ;
    return(
            <Box style = {{display : 'flex' , justifyContent: 'center'}}>
                <img className = {classes.obj} src = {photo} / >
            </Box>
    )
}
export default Portfolio ;