export function Reviews() {
    return <div className="reviewContainer">
        < ReviewHeading />
        < ReviewSubText />
        < ReviewCards />
    </div>
}

function ReviewHeading() {
    return <div className="reviewHeading">Reviews</div>;
}

function ReviewSubText() { return <div className="reviewSubText">Read all the reviews from the people I've worked with</div>; }

function ReviewCards() {
    const reviewsDatas = [
        {
            title: 'A terrific piece of work',
            name: 'Harry Osborn',
            description: 'Works at Osborn Corps'
        },
        {
            title: 'A fantastic bit of feedback',
            name: 'Tony Stark',
            description: 'Owner of Stark Industries'
        },
        {
            title: 'A genuinely glowing product',
            name: 'Donquixote Doflamingo',
            description: 'Owner of Smile devil fruits factory'
        }
    ]

    return <div className="reviewCardsContainer">
        {reviewsDatas.map(reviewData => {
            return < ReviewCard title={reviewData.title} name={reviewData.name} description={reviewData.description} />
        })}
    </div>;
}

function ReviewCard(props) {
    const { title, name, description } = props;
    console.log(props);

    return <div className="reviewCard">
        <div className="cardTitle">"{title}"</div>
        <div className="userName">{name}</div>
        <div className="userDescription">{description}</div>
    </div>
}