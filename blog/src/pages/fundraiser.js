import Helmet from 'react-helmet'
import Layout from '../components/layout'
import React from 'react'
import bow from '../assets/images/bow.jpeg'
import covid from '../assets/images/files/covid.jpg'
import pic11 from '../assets/images/pic11.jpg'
import rainbow from '../assets/images/rainbow.jpeg'

const Fundraiser = props => (
  <Layout>
    <Helmet>
      <title>Covid 19 Update</title>
      <meta name="description" content="Covid 19 Info" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h3>The Magic of Nutcracker Is Working! </h3>

            <h4>Amazing New Opportunity: 12,500$ challenge grant!</h4>
          </header>
          <a href="https://donorbox.org/help-st-croix-ballet-during-covid-19">
            <button>Donate</button>
          </a>
          <h3>UPDATE: November 27, 2020</h3>
          <p>Dear Friends,</p> <p>The magic is alive.</p>{' '}
          <p>
            One week ago we sent a letter sharing that the challenge of Covid-19
            has severely impacted St. Croix Ballet and threatened our survival.{' '}
          </p>{' '}
          <p>
            You responded with an incredible outpouring of love and support that
            was overwhelming and heartwarming and we are so grateful. In just
            one week, we made a very strong beginning in reaching our $30,000
            goal.{' '}
          </p>{' '}
          <p>
            You are truly a part of the St. Croix Ballet family. Your gift is
            helping to save a special place for the children today and the ones
            yet to come. You are making a difference in the youth who are
            touched by SCB.
          </p>{' '}
          <p>
            NEWS BULLETIN! Just yesterday an anonymous donor has stepped up with
            a Challenge Grant to match all contributions to support St. Croix
            Ballet from now until December 31st—up to $12,500!!!{' '}
          </p>{' '}
          <p>Many of you have already given generously. Thank you. </p>{' '}
          <p>
            To All: whatever amount and additional amount you are willing and
            able to contribute today and in the next 27 days will be matched by
            this generous Challenge Grant and will help us reach our goal. This
            is a chance for your gift to have twice the power towards saving the
            studio. Thank you in advance for your support. (Give by clicking the
            DONATE link below).
          </p>{' '}
          <p>With profound gratitude,</p>{' '}
          <p>
            Susan Hovey<br></br>
            Artistic Director
          </p>{' '}
          <p>
            Brian Sweeney<br></br>
            Co-Founder
          </p>
          <p>
            <a href="https://donorbox.org/help-st-croix-ballet-during-covid-19">
              <button>Donate</button>
            </a>
          </p>
          <p></p>
          <header className="major">
            <h3>This Thanksgiving, the magic of the Nutcracker needs you!</h3>
          </header>
          <h3>November 27, 2020</h3>
          <p>Dear Friends and Family of St. Croix Ballet,</p>
          <p>
            On this day for the past 30 years over 100 excited dancers have
            taken the stage for St. Croix Ballet’s annual Stillwater Nutcracker.
            You have been a part of the remarkable journey joining over 77,000
            individuals who have watched the 175 performances these last three
            decades. So, of course, it is with great sadness that we cannot be
            on the Stillwater Nutcracker stage today due to the unprecedented
            challenge of Covid-19.
          </p>
          <img className="image postimage" align="right" src={bow} alt="" />
          <p>
            In this time of Thanksgiving, we want to thank the dancers,
            families, audience members, and all those who have supported St.
            Croix Ballet over the years. Without you, we wouldn’t even have the
            opportunity to serve and train the thousands of dancers who have
            gone through the studio and perform not just the Stillwater
            Nutcracker but spring shows that have included Sleeping Beauty,
            Cinderella, and Coppelia as well as the Summer Galas.
          </p>
          <p>
            Now some tough news: the challenge of Covid-19 has severely impacted
            St. Croix Ballet and threatens our survival. It is common knowledge
            that Nutcrackers (and other shows)—from the Joffrey Ballet to
            Milwaukee Ballet to St. Croix Ballet—essentially support the year
            round program. It has always been the case that the ‘ballet school’
            portion of St. Croix Ballet, at best, is a break even operation. It
            is a labor of love.
          </p>
          <h3>A Bridge: Asking for your Support</h3>
          <p>
            But there is good news and hope on the horizon. With the recent
            announcements of vaccines and other therapeutics, from all accounts
            it looks as though things could be back towards a normal by late
            spring.
          </p>
          <img className="image postimage" align="left" src={rainbow} alt="" />
          <p>
            With that in mind, we’ve developed a plan. We believe if we can
            raise at least $30,000 in the coming weeks and months, we can get
            through this current crisis and rebuild the St. Croix Ballet program
            back to where it was before the start of the pandemic.
          </p>
          <p>
            This is a difficult ask for us. We have never in this way asked
            directly for financial support. But we believe that St. Croix Ballet
            is worth saving so it can continue to serve the next generation of
            dancers and their families in the St. Croix Valley and the East
            Metro.
          </p>
          <p>
            Therefore, we are asking you to continue to be a part of St. Croix
            Ballet by supporting us--now (click on the link below to
            contribute). All gifts will be a tax-deductible contribution. If you
            can give $25, $50, $100. Wonderful! If you are inspired and capable
            of giving even more--$250, $500, or even a $1000. Wonderful!
          </p>
          <p>
            Thank you for your consideration and support for St. Croix Ballet.
          </p>
          <p>Have a warm and safe Thanksgiving weekend.</p>
          <p>
            <b>Susan Hovey</b> - Artistic Director{' '}
          </p>
          <p>
            <b>Brian Sweeney</b> - Co-Founder
          </p>
          <p></p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Fundraiser
