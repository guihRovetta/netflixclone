import {compareAsc, formatISO} from 'date-fns';
import {createServer, Model, Registry} from 'miragejs';
import {ModelDefinition} from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

type Genre =
  | 'action'
  | 'adventure'
  | 'drama'
  | 'comedy'
  | 'horror'
  | 'fantasy'
  | 'mystery'
  | 'sci-fi';

type ParentalRating = 'L' | '10' | '12' | '14' | '16' | '18';

export type Item = {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
  type: 'movie' | 'tv-show';
  genres: Genre[];
  media: string;
  parentalRating: ParentalRating;
  logo: string;
  isOriginal: boolean;
  group: 'soon' | 'trending' | 'top10Movies' | 'top10TvShows';
};

const ItemModel: ModelDefinition<Item> = Model.extend({});

type AppRegistry = Registry<
  {
    item: typeof ItemModel;
  },
  any
>;
type AppSchema = Schema<AppRegistry>;

const getDate = (year: number, month: number, day: number) =>
  new Date(year, month, day);

const getISODate = (date: Date) => formatISO(date);

const items: Partial<Item>[] = [
  {
    title: 'House of Dragon',
    description:
      'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
    releaseDate: getISODate(getDate(2022, 8, 21)),
    type: 'tv-show',
    genres: ['action', 'adventure', 'drama'],
    media:
      'https://cafecomnerd.com.br/wp-content/uploads/2022/08/A-Casa-do-Dragao-Por-dentro-do-Episodio-1-da-serie-prequela-de-Game-of-Thrones-na-HBO-MAX.jpg',
    parentalRating: '18',
    logo: 'https://image.tmdb.org/t/p/original/RelFRDuGdAwsu2H6pgTUnvX8QB.png',
    group: 'top10TvShows',
  },
  {
    title: 'The Lord of the Rings: The Rings of Power',
    description: `Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth.`,
    releaseDate: getISODate(getDate(2022, 9, 1)),
    type: 'tv-show',
    genres: ['action', 'adventure', 'drama'],
    media:
      'https://media.vanityfair.com/photos/61e8270bc5ec964f04713571/5:3/w_1800,h_1080,c_limit/FORGED_1920x1080_en-US.jpg',
    parentalRating: '16',
    logo: 'https://dx35vtwkllhj9.cloudfront.net/amazonstudios/the-lord-of-the-rings-rings-of-power/images/regions/intl/tt.png',
    group: 'top10TvShows',
  },
  {
    title: 'Nope',
    description:
      'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
    releaseDate: getISODate(getDate(2022, 8, 25)),
    type: 'movie',
    genres: ['horror', 'sci-fi', 'mystery'],
    media:
      'https://i0.wp.com/www.ovnihoje.com/wp-content/uploads/2022/08/nope-poster.jpg?fit=740%2C380&ssl=1',
    parentalRating: '18',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Nope_black_logo.png',
    group: 'top10Movies',
  },
  {
    title: 'Hocus Pocus 2',
    description:
      'Three young women accidentally bring back the Sanderson Sisters to modern day Salem and must figure out how to stop the child-hungry witches from wreaking havoc on the world.',
    releaseDate: getISODate(getDate(2022, 9, 30)),
    type: 'movie',
    genres: ['comedy', 'fantasy'],
    media:
      'https://www.nit.pt/wp-content/uploads/2022/09/4cc0d1d02e8f1f5a0d57aca8e1706d53-754x394.jpg',
    parentalRating: 'L',
    logo: 'https://lumiere-a.akamaihd.net/v1/images/au_disneyplus_hocuspocus2_logo_1_46f0448c.png',
    group: 'trending',
  },
  {
    title: 'The Midnight Club',
    description:
      'The Midnight Club follows a group of five terminally ill patients at Brightcliffe Hospice, who begin to gather together at midnight to share scary stories.',
    releaseDate: getISODate(getDate(2022, 10, 7)),
    type: 'tv-show',
    genres: ['drama', 'horror', 'mystery'],
    media:
      'https://i1.wp.com/images.gameswfu.net/novo-trailer-e-poster-de-the-midnight-club-lancados-pela-netflix-6329e6464cf33.jpeg',
    parentalRating: '12',
    logo: 'http://hollywoodnorthbuzz.com/wp-content/uploads/2022/06/the-midnight-club-poster-3.png',
    isOriginal: true,
    group: 'soon',
  },
  {
    title: 'The Curse of Bridge Hollow',
    description: `A teenage girl, who accidentally releases an ancient and mischievous spirit on Halloween which causes decorations to come alive and wreak havoc, must team up with the last person she'd want to in order to save their town - her father.`,
    releaseDate: getISODate(getDate(2022, 10, 14)),
    type: 'movie',
    genres: ['adventure', 'comedy'],
    media:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/The-Curse-of-Bridge-Hollow.jpg',
    parentalRating: 'L',
    logo: 'https://alterianinc.com/wp-content/uploads/2022/09/BridgeHollow-FI.png',
    isOriginal: true,
    group: 'soon',
  },
  {
    title: '1899',
    description:
      'Multinational immigrants traveling from the old continent to the new encounter a nightmarish riddle aboard a second ship adrift on the open sea.',
    releaseDate: getISODate(getDate(2022, 11, 17)),
    type: 'movie',
    genres: ['drama', 'horror'],
    media:
      'https://updatecharts.com.br/wp-content/uploads/2022/09/1899_serie_netflix_updatecharts.png',
    parentalRating: '16',
    logo: 'https://i0.wp.com/www.arrobanerd.com.br/wp-content/uploads/2022/06/1899.png?fit=1206%2C675&ssl=1',
    isOriginal: true,
    group: 'soon',
  },
  {
    title: 'Morbius',
    description:
      'Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.',
    releaseDate: getISODate(getDate(2022, 10, 17)),
    type: 'movie',
    genres: ['action', 'adventure', 'horror'],
    media: 'https://images.alphacoders.com/121/thumb-1920-1215951.jpg',
    parentalRating: '14',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Morbius_%28film%29_logo.png/800px-Morbius_%28film%29_logo.png',
    group: 'trending',
  },
  {
    title: 'Dracula Untold',
    description:
      'As his kingdom is being threatened by the Turks, young prince Vlad Tepes must become a monster feared by his own people in order to obtain the power needed to protect his own family, and the families of his kingdom.',
    releaseDate: getISODate(getDate(2022, 10, 31)),
    type: 'movie',
    genres: ['action', 'drama', 'fantasy'],
    media: 'https://images.alphacoders.com/546/thumb-1920-546685.jpg',
    parentalRating: '14',
    logo: 'https://picfiles.alphacoders.com/596/59675.png',
    group: 'top10Movies',
  },
  {
    title: 'Lost',
    description:
      'The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.',
    releaseDate: getISODate(getDate(2022, 11, 1)),
    type: 'tv-show',
    genres: ['adventure', 'drama', 'fantasy'],
    media: 'https://images3.alphacoders.com/819/819967.jpg',
    parentalRating: '14',
    logo: 'https://cdn.pixabay.com/photo/2013/07/12/17/57/dharma-152673_640.png',
    group: 'top10TvShows',
  },
];

export const mockServer = () =>
  createServer({
    models: {
      items: ItemModel,
    },
    routes() {
      this.namespace = 'api';
      this.timing = 2000;

      this.get('/whats-new', (schema: AppSchema, _) => {
        return schema
          ?.all('items')
          ?.sort((a, b) =>
            compareAsc(new Date(a?.releaseDate), new Date(b?.releaseDate)),
          );
      });
    },
    seeds(server) {
      server?.db?.loadData({
        items: items,
      });
    },
  });
