import {Component} from 'react'

import {
  DivContainer,
  Heading,
  MainContainer,
  FormContainer,
  Label,
  UserInput,
  SelectFont,
  CustomButton,
  Meme,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    urlInput: '',
    topInput: '',
    bottomInput: '',
    fontSizeOption: fontSizesOptionsList[0].optionId,
    MemeUrl: '',
    MemeTopText: '',
    MemeBottomText: '',
    MemeFontSize: '',
  }

  changeUrlInput = event => {
    this.setState({urlInput: event.target.value})
  }

  changeTopInput = event => {
    this.setState({topInput: event.target.value})
  }

  changeBottomInput = event => {
    this.setState({bottomInput: event.target.value})
  }

  changeFontSize = event => {
    this.setState({fontSizeOption: event.target.value})
  }

  onGenerate = event => {
    event.preventDefault()
    const {urlInput, topInput, bottomInput, fontSizeOption} = this.state

    this.setState({
      MemeUrl: urlInput,
      MemeTopText: topInput,
      MemeBottomText: bottomInput,
      MemeFontSize: fontSizeOption,
    })
  }

  renderMeme = () => {
    const {MemeUrl, MemeTopText, MemeBottomText, MemeFontSize} = this.state
    return (
      <Meme data-testid="meme" image={MemeUrl}>
        <MemeText textSize={MemeFontSize}>{MemeTopText}</MemeText>
        <MemeText textSize={MemeFontSize}>{MemeBottomText}</MemeText>
      </Meme>
    )
  }

  render() {
    const {urlInput, topInput, bottomInput, fontSizeOption} = this.state
    return (
      <DivContainer>
        <Heading>Meme Generator</Heading>
        <MainContainer>
          <FormContainer as="form" onSubmit={this.onGenerate}>
            <Label htmlFor="imageUrl">Image Url</Label>
            <UserInput
              type="text"
              id="imageUrl"
              value={urlInput}
              onChange={this.changeUrlInput}
              placeholder="Enter the Image Url"
            />
            <Label htmlFor="topText">Top Text</Label>
            <UserInput
              type="text"
              id="topText"
              value={topInput}
              onChange={this.changeTopInput}
              placeholder="Enter the Top Text"
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <UserInput
              type="text"
              id="bottomText"
              value={bottomInput}
              onChange={this.changeBottomInput}
              placeholder="Enter the Bottom Text"
            />
            <Label htmlFor="fontSize">Font Size</Label>
            <SelectFont
              id="fontSize"
              value={fontSizeOption}
              onChange={this.changeFontSize}
            >
              {fontSizesOptionsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </SelectFont>
            <CustomButton type="submit">Generate</CustomButton>
          </FormContainer>
          {this.renderMeme()}
        </MainContainer>
      </DivContainer>
    )
  }
}

export default MemeGenerator
