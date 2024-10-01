// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
    </ul>
  );
}


// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { bestFeatures, worstFeatures, consistency, color, logo, spendTime, name, email, review }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3> 
        
        <p>
          <em>How do you rate your rubber duck's color?</em>
          <span className="answer__line">{color}</span> 
        </p>
        
        <p>
          <em>What do you think are the best features of your rubber duck?</em>
          <ItemsList list={bestFeatures} />
        </p>
        
        <p>
          <em>What do you think are the worst features of your rubber duck?</em>
          <ItemsList list={worstFeatures} />
        </p>
        
        <p>
          <em>How consistent do you think your rubber duck is?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </p>
        
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>

        <p>
          <em>Your email:</em>
          <span className="answer__line">{email}</span>
        </p>
      </article>
    </li>
  );
}
