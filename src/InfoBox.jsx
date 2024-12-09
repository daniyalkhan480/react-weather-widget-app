import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// Material Icons
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({info}){

    const hot_url = "https://images.unsplash.com/photo-1581205135021-fbad89f942a6?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url = "https://images.unsplash.com/photo-1705352179565-eb13029def3e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainy_url = "https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const clear_url = "https://images.unsplash.com/photo-1719277414545-71781788aafa?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    if(!info){
        // console.log("null");
        return(
            <p>No result found for current city.</p>
        )
    }
    const imageControl = ()=>{
        if(info.humidity > 80){
            return {url : rainy_url, icon : <BeachAccessIcon/>};
        }else if(info.temp < 15){
            return {url : cold_url, icon : <AcUnitIcon/>};
        }else if(info.temp>35){
            return {url : hot_url, icon : <WbSunnyIcon/>};

        }else{
            return {url : clear_url, icon : <WbSunnyIcon/>};
        }
    }

    const imgIcon = imageControl(); 
    return (
        <div className="info-box">
            <h4>Weather detail</h4>

            <Card sx={{ width: "30vw" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imgIcon.url}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     {info.city} &nbsp; {imgIcon.icon}
                    </Typography>
                    <Typography variant="body2"  component = "span" sx={{ color: 'text.secondary' ,textAlign : "left" }}>
                        <p>Temperature : {info.temp} &#176;C</p>
                        <p> Humidity : {info.humidity} </p>
                        <p>Max. Temperature : {info.temp_max} &#176;C</p>
                        <p>Min. Temperature : {info.temp_min} &#176;C</p>
                        <p>The weatherr can be described as <b><i>{info.weather}</i></b> and feels like <b><i>{info.feels_like}</i></b>  &#176;C</p>
                    </Typography>
                </CardContent>
                </Card>

        </div>
    )
}