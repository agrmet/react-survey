import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({
    bestFeatures: [],
    worstFeatures: [],
    consistency: "",
    color: "",
    logo: "",
    spendTime: [],
    review: "",
    name: "",
    email: ""
  });

  const [submissions, setSubmissions] = useState([])

  const handleSubmit = (event) => {
    console.log("Submitted")
    event.preventDefault()
    setSubmissions([...submissions, formData])
    
  };

  const handleChange = (event) => {    
    const { name, value, type, checked } = event.target

    if (type === "checkbox") {
      if (checked) {

        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: [...prevFormData[name], value],
        }))
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: prevFormData[name].filter((item) => item !== value),
        }))
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  
    console.log(formData)
    
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>What would you say are the best features of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="It's yellow!"
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                  name="bestFeatures"
                  type="checkbox"
                  value="It squeaks!" 
                  onChange={handleChange}/>
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="It has a logo!"
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="bestFeatures"
                    type="checkbox"
                    value="It's big!" 
                    onChange={handleChange}/>
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>What would you say are the worst features of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="worstFeatures"
                    type="checkbox"
                    value="It's yellow!"
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                  name="worstFeatures"
                  type="checkbox"
                  value="It squeaks!" 
                  onChange={handleChange}/>
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstFeatures"
                    type="checkbox"
                    value="It has a logo!"
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="worstFeatures"
                    type="checkbox"
                    value="It's big!" 
                    onChange={handleChange}/>
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input id="consistency-one" type="radio" name="consistency" value="1" onChange={handleChange}/>
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input id="consistency-two" type="radio" name="consistency" value="2" onChange={handleChange}/>
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input id="consistency-three" type="radio" name="consistency" value="3" onChange={handleChange}/>
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input id="consistency-four" type="radio" name="consistency" value="4" onChange={handleChange}/>
                <label htmlFor="consistency-four">4</label>
                
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck color?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange}/>
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleChange}/>
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange}/>
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input id="logo-one" type="radio" name="logo" value="1" onChange={handleChange}/>
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input id="logo-two" type="radio" name="logo" value="2" onChange={handleChange}/>
                <label htmlFor="logo-two">2</label>
              </li>
              <li>
                <input id="logo-three" type="radio" name="logo" value="3" onChange={handleChange}/>
                <label htmlFor="logo-three">3</label>
              </li>
              <li>
                <input id="logo-four" type="radio" name="logo" value="4" onChange={handleChange}/>
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How would you like to spend time with your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="Swimming"
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="spendTime"
                    type="checkbox"
                    value="Bathing"
                    onChange={handleChange} />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange} 
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="spendTime" 
                    type="checkbox" 
                    value="noTime" 
                    onChange={handleChange} />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea 
              name="review" 
              cols="30" 
              rows="10" 
              onChange={handleChange} 
              value= {formData.review}
              >
            </textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input 
              type="text"
              name="name" 
              onChange={handleChange} 
              value={formData.name} 
              />
          </label>
          <label>
            Leave us your email pretty please??
            <input 
              type="email" 
              name="email" 
              onChange={handleChange} 
              value= {formData.email} 
              />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;