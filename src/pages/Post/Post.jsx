import './Post.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProfilePicturePlaceholder from '../../assets/profile-picture.jpg';
import AuthorCard from './AuthorCard';

function Post(props) {
  const { postID } = useParams();

  /* TODO: convert this placeholder variable into a useEffect
  component mount hook to fetch data from the backend database
  based on the URL's /post/:id as a basis for the component */
  const fetchedData = {
    postID: postID, // the fetchedData's postID should be based on the URL
    authorUID: '87cxzids989a',
    datePosted: 1681354006526,
    title: 'Functional Versus Object-Oriented Programming',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem praesentium deleniti illum totam omnis expedita explicabo dolores. Quidem, minus accusamus earum temporibus laudantium dolorum, iusto quas voluptas neque facere id tempora possimus ea harum rerum dolor culpa inventore, est repellendus voluptatibus similique iure. Rerum odio beatae nulla assumenda consequatur!',
    tags: ['Programming', 'Computer Science', 'Technology'],
  };
  console.log(fetchedData.postID);
  const fetchedUserProfilePicture = ProfilePicturePlaceholder; // placeholder
  const datePosted = new Date(fetchedData.datePosted)
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ');

  return (
    <div className="Post">
      <div className="Post--header">
        <h1 className="Post__title">{fetchedData.title}</h1>
        <div className="Post__date">
          <span className="Post__date__heading">Created On</span>
          {datePosted}
        </div>
        <Link
          className="Post__AuthorCard--link"
          to={`/profile/${fetchedData.authorUID}`}
        >
          <AuthorCard
            name="John Doe"
            title="Writer"
            profilePictureURL={fetchedUserProfilePicture}
          />
        </Link>
        <div className="Post__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          quidem praesentium deleniti illum totam omnis expedita explicabo
          dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam quidem praesentium deleniti illum totam omnis expedita
          explicabo dolores. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam quidem praesentium deleniti illum totam omnis expedita
          explicabo dolores. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam quidem praesentium deleniti illum totam omnis expedita
          explicabo dolores. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam quidem praesentium deleniti illum totam omnis expedita
          explicabo dolores.
        </div>
      </div>
    </div>
  );
}

export default Post;
