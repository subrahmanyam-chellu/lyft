import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';

import c1 from '/src/assets/c1.png';
import c2 from '/src/assets/c2.png';
import c3 from '/src/assets/c3.png';
import c4 from '/src/assets/c4.png';
import c5 from '/src/assets/c5.png';
import { Box } from '@mui/material';

const datas = [{ header: 'Wait & Save', image: c1, sm1: 'Budget-friendly', sm2: 'Private' },
{ header: 'Standard', image: c2, sm1: 'Efficient', sm2: 'Private' },
{ header: 'Priority Pickup', image: c3, sm1: 'Efficient', sm2: 'Private' },
{ header: 'Extra Comfort', image: c4, sm1: 'Nice cars', sm2: 'Top drivers' },
{ header: 'XL', image: c5, sm1: 'Spacious SUVs', sm2: 'Room for up to 6' },
]

export default function ActionAreaCard() {
    return (
        <Box>
            {
                datas.map((data) => {

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardHeader>
                                {data.header}
                            </CardHeader>
                            <CardMedia
                                component="img"
                                height="140"
                                image={data.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.sm1}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {data.sm2}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                })
            }
        </Box>
    );
}
