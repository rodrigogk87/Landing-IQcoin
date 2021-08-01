export const Contact = (props) => {

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.telegram : '/'}>
                      <i className='fab fa-telegram'></i>
                    </a>
                  </li>
                </ul>
                <hr></hr>
                Token contract address <a id="contractaddress" href="https://bscscan.com/address/0xa400f832C0a924DEcAD4d298edE04A8C6D71153D">0xa400f832C0a924DEcAD4d298edE04A8C6D71153D</a>
                <br></br>
                Official email address iqtestcoin@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
