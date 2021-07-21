import JsonData from '../data/data.json'

export const GoToTest = (props) => {
  //https://quirky-davinci-3c695a.netlify.app
  return (
    <a href={JsonData.GoToTest.dapp_url} id='goToTest' class="btn btn-custom btn-lg page-scroll">
      Go to the test
    </a>
  )
}
