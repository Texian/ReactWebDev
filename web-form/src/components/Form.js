import React from "react";

const Form = (props) => {
  
  // function showText(props) {
  //   console.log(props.title);
  //   name = { props.name }
  //   hometown = { props.hometown }
  //   solarCaste = { props.solarCaste }
  // }

  return (
    <div id="design">
      <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-xl-6">
            <form>
              <h1>{props.title}</h1>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" />
                <label for="hometown">Hometown</label>
                <input type="text" id="hometown" name="hometown" placeholder="Hometown" />
                  <label for="solarCaste">Caste</label>
                  <select name="solarCaste" id="solarCaste">
                  <option value="dawn">Dawn</option>
                  <option value="zenith">Zenith</option>
                  <option value="twilight">Twilight</option>
                  <option value="night">Night</option>
                  <option value="eclipse">Eclipse</option> 
                  </select>
              <input type="button" value="submit"/>
            </form>
          </div>
          {/* <div class="show">{name} + '<br />' + {hometown} + '<br />' + {solarCaste};</div> */}
        </div>
      </div>
    </div>
  );
}

export default Form;