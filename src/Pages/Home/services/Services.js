import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';


const Services = () => {
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('fakedata.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    const fake = [
        { img: 'https://i.ibb.co/GJQfZcv/cavity.png', title: 'cavity fillings', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam est aliquid adipisci quam tempore esse!' },
        {
            img: 'https://i.ibb.co/s9gW58v/fluoride.png', title: 'Floride Testing', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur temporibus ullam, laboriosam pariatur expedita nisi?'
        },
        {
            img: 'https://i.ibb.co/89ntCpp/whitening.png', title: 'Teath Whitening', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur temporibus ullam, laboriosam pariatur expedita nisi?'
        }
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="body2" sx={{ color: 'info.main', fontSize: 'h5.fontSize', fontWeight: 600, my: 3 }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 'h3.fontSize', fontWeight: 700, mb: 9 }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {fake.map((service) => (
                        <Service
                            key={service.name}
                            service={service}
                        ></Service>
                    ))}
                    {/* {
                        services.map(service => <Service
                        key={service.name}
                        service={service}
                        ></Service>)
                    } */}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;