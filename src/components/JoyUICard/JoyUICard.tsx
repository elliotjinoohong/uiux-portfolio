import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import './JoyUICard.css'

interface JoyUICardProps {
    imgSrc: string
    title: string
    tags: string[]
    setIsModalOpen: (x:boolean) => void
}

export default function JoyUICard(props: JoyUICardProps) {
    const { imgSrc, title, tags, setIsModalOpen } = props
  return (
    <Card sx={{ minHeight: '280px', width: 500 }} className="joy-ui-card-wrapper" onClick={() => setIsModalOpen(true)}>
      <CardCover>
        <img
          src={imgSrc}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
            {title}
        </Typography>
        <Typography
          textColor="neutral.300"
        >
          Redesign, Responsiveness
        </Typography>
      </CardContent>
    </Card>
  );
}