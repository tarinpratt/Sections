import React from 'react';

class Sections extends React.Component {
    static defaultProps = { 
        sections: [] 
        };
        state = {
            currentSectionIndex: -1
        }


    handleButtonClick = (index) => {
        this.setState({ currentSectionIndex: index })
        console.log(index)
      } 

    render() {
        const buttons = this.props.sections.map((section, index) => (
            <button key={index} onClick={() =>this.handleButtonClick(index)}>
              {section.title}
            </button>    
        ))
        return ( <ul>
            <li>
                {buttons[0]}
                {this.state.currentSectionIndex === 0 &&
                <p>{this.props.sections[0].content}</p>
                }
            </li>
            <li>
                {buttons[1]}
                {this.state.currentSectionIndex === 1 && 
                <p>{this.props.sections[1].content}</p>
                }
            </li>
            <li>
                {buttons[2]}
                {this.state.currentSectionIndex === 2 &&
                <p>{this.props.sections[2].content}</p>
                }
            </li>

        </ul>
        )
    }
}

    

  export default Sections;