import { createLazyFileRoute } from '@tanstack/react-router'
import Card from '../components/card'

interface FLGS {
  title: string;
  address: string;
  description: string;
  image: string;
  link: () => void;
}

const linkFunc = (urlToLinkTo: string) => {
  return () => {window.open(urlToLinkTo, '_blank', 'noopener,noreferrer');}
}

const listOfFLGS: FLGS[] = [
  {
    title: 'Guardian Games',
    address: '345 SE Taylor St, Portland, OR 97214',
    description: 'Large gaming store offering a variety of tabletop, board, collectible card & role-playing games.',
    image: 'https://i0.wp.com/ggportland.com/wp-content/uploads/2024/01/Icon_WebsiteStorefronts_PDX_Circle_01.png?w=1500&ssl=1',
    link: linkFunc("https://ggportland.com/")
  },
  {
    title: 'The Portland Game Store',
    address: '922 N Killingsworth St, Portland, OR 97217',
    description: 'The Portland Game Store was founded in 2015 with the aim to create a community space that is inclusive and welcoming to tabletop game lovers in North Portland, Oregon.',
    image: 'https://cc-client-assets.nyc3.cdn.digitaloceanspaces.com/store/theportlandgamestore/71498023dae04081a7b002a4127d8561/medium/pgamestore.png',
    link: linkFunc('https://www.theportlandgamestore.com/')
  },
  {
    title: 'Mox Boarding House',
    address: '1938 W Burnside St, Portland, OR 97209',
    description: 'You found us, and we can assure you there is no other like us! Mox Boarding House is a dining experience offering fine foods and drinks with a boardgame store filled with all your favorites and many waiting to be discovered.',
    image: 'https://cdn11.bigcommerce.com/s-7eepw5u9z2/product_images/uploaded_images/portland-location-banner-1.jpg',
    link: linkFunc('https://www.moxboardinghouse.com/portland/')
  },
  {
    title: 'Red Castle Games',
    address: '7160 SE Foster Rd, Portland, OR 97206',
    description: 'Located in SE Portland, OR specializing in board games, card games, role-playing games, & tabletop miniatures games. Come in and find your new favorite!',
    image: 'https://redcastlegames.com/wp-content/uploads/2015/04/cropped-red-castle_horizontalgradient-e1427914370499-1.jpg',
    link: linkFunc('https://redcastlegames.com/')
  },
  {
    title: 'Chronos Games and Gifts',
    address: '13227 SW Canyon Rd A, Beaverton, OR 97005',
    description: 'Welcome to Chronos Games & Gifts, your one-stop shop for all things nerdy! Just like adventurers scouring forgotten lands, we travel the globe to bring you a curated selection of board games, collectibles, plush, and gifts you won\'t find just anywhere else.',
    image: '',
    link: linkFunc('https://chronosgg.com/')
  }
]



export const Route = createLazyFileRoute('/flgs')({
  component: () => (
    <>
      {
        listOfFLGS.map((flgs: FLGS) => (
          <div className="m-1">
            <Card 
            title={flgs.title}
            subheader={flgs.address}
            description={flgs.description}
            image={flgs.image}
            link={flgs.link}
            />
          </div>
          
        ))
      }
    </>
  )
})