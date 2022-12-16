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
    const renderTags = () => {
      return tags.map(tag => 
        <div style={{border: 'solid 2px #B9B9C6', paddingLeft: '6px', paddingRight: '6px', marginRight: '10px', borderRadius: '8px'}}>
          {tag}
        </div>
      )
    }
  return (
    <Card sx={{ minHeight: '230px', width: 400 }} className="joy-ui-card-wrapper" onClick={() => setIsModalOpen(true)}>
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
          style={{display: 'flex'}}
          textColor="neutral.300"
        >
          {renderTags()}
        </Typography>
      </CardContent>
    </Card>
  );
}