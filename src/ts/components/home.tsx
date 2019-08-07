import React from "react";
import Input from './Input'
import TScomp from './tsComponent'
import '../form.scss';

interface OwnState {
  seo_title: string
}
export class FormContainer extends React.Component<{}, OwnState> {

  state = {
    seo_title: "usman"
  }

  handleChange = (event:{target:{value:string}}) => {
    this.setState({ seo_title: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <React.Fragment>
        
        <form id="article-form" className='col-md-5'>
        I'm written in<h1>Type script</h1>
        <Input
          text=''
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        
        Write in  TYPESCRIPT...
        <div>
        
        </div>
      </form>
      <TScomp name={seo_title}  />
      </React.Fragment>
      
    );
  }
}
export default FormContainer;
