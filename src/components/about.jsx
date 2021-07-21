export const About = (props) => {
  return (
    <div id='about' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Introduction</h2>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-12 section-title'>
            <div className='about-text'>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>How many coins do i get?</h3>
              <p>You get an amount proportional to your score</p>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}><i class="fas fa-check"></i>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}><i class="fas fa-check"></i>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
              <hr></hr>
              <p>You always receive an amount of coins, even if you do not answer any correctly, you will receive 24010 coins for 0.05 eth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
