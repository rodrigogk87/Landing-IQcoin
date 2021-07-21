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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
