import React, { useState } from "react";
import Footer from "../Components/Layout/Footer";
import Headers from "../Components/Layout/Headers";
import Heading from "../Components/Layout/Heading";
import styles from "../Styles/styles";

const TermsandConditionPage = () => {
  return (
    <div>
      <Heading activeHeading={4} />
      <Headers activeHeading={4} />
      <TermsandConditions />
      <Footer />
    </div>
  );
};

const TermsandConditions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} `}>
      <h2 className="text-3xl font-bold text-rose-950 ">
        Terms and Conditions
      </h2>
      <h3 className="mb-8 ">Welcome to Crafity. We’re happy to have you here. Please read and follow the rules.</h3>

      <div className="mx-auto space-y-4">
        <div className="border-b border-rose-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(1)}
          >
            <span className="text-lg font-medium text-rose-900">
              You agree to comply with and be bound by the following Terms:
            </span>
            {activeTab === 1 ? (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 1 && (
            <div className="mt-4">
              <p className="text-base text-rose-500 font-Poppins">
                The terms set forth below (the "Terms of Service" or
                "Agreement") govern your use of Crafity (the "Service"). By
                using or operating the Service, you expressly agree to be bound
                by this Agreement and to follow all its terms and any applicable
                laws and regulations governing the Service. If you do not agree
                with any of the following terms, your sole recourse is not to
                use the Service. The Terms are a legally binding contract
                between you and Crafity. Please note that this Agreement
                contains an arbitration clause and class action waiver. By
                agreeing to the Terms, you agree to resolve all disputes through
                binding individual arbitration, which means that you waive any
                right to have those disputes decided by a judge or jury, and
                that you waive your right to participate in class actions, class
                arbitrations, or representative actions. This contract sets out
                your rights and responsibilities when you use our website
                Handmade.gifts, our mobile apps, and the other services provided
                by Crafity (we’ll refer to all of these collectively as our
                “Services”), so please read it carefully. By using any of our
                Services (even just browsing one of our websites), you’re
                agreeing to the Terms.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-rose-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-rose-900">
              Notice: Terms of Service subject to changes
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-rose-500 font-Poppins">
                Crafity shall have the right to modify these terms at any time,
                which modification shall be effective immediately upon posting
                to https://www.crafity/terms without notifications.
                Accordingly, we encourage you to periodically review these
                terms. To make your review more convenient, the effective date
                is posted at the bottom of the page. Use of Crafity’ networks
                and/or services constitutes unconditional agreement to the terms
                of this Agreement, and by such use you agree to indemnify and
                hold harmless Crafity from any and all costs or damages you may
                incur consequent to Crafity’ enforcement - or lack thereof - of
                this Agreement. Crafity further reserves the right to refuse
                access and/or service to anyone, at any time, for any reason.
                Crafity serves as an online marketplace to allow qualifying
                users to offer, sell and purchase goods and services for an
                agreed upon price. Crafity has no involvement in the
                consummation of a contract between a seller and a buyer.
                Accordingly, Crafity has no liability or responsibility for any
                matter arising out of the transaction between a seller and a
                buyer. You should be comfortable in all respects with a seller
                before purchasing goods from the site.{" "}
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-rose-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="text-lg font-medium text-rose-900">
              Your account with Crafity
            </span>
            {activeTab === 3 ? (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-rose-500 font-Poppins">
                You’ll need to create an account with Crafity to use some of our
                Services. Here are a few rules about accounts with Crafity: <br /><b>A.</b>
                You must be 18 years or older to use our Services. Minors under
                18 and at least 13 years of age are only permitted to use our
                Services through an account owned by a parent or legal guardian
                with their appropriate permission and under their direct
                supervision. Children under 13 years are not permitted to use
                Crafity or the Services. You are responsible for any and all
                account activity conducted by a minor on your account.<br />
                <b>B.</b> Be honest and provide us with accurate information about yourself.
                It’s prohibited to use false information or impersonate another
                person or company through your account.<br /> 
                <b>C.</b> Choose an appropriate name. If you decide to not have your full name serve as the name
                associated with your account, you may not use language that is
                offensive, vulgar, infringes someone’s intellectual property
                rights, or otherwise violates the Terms. <br />
                <b>D.</b> You're responsible for your account. You’re solely responsible for any activity on
                your account. If you’re sharing an account with other people,
                then the person whose financial information is on the account
                will ultimately be responsible for all activity. If you’re
                registering as a business entity, you personally guarantee that
                you have the authority to agree to the Terms on behalf of the
                business. Also, your accounts are not transferable. <br />
                <b>E.</b> Protect your password. As we mentioned above, you’re solely responsible
                for any activity on your account, so it’s important to keep your
                account password secure. <br /><b>F.</b> Let's be clear about our
                relationship. These Terms don't create any agency, partnership,
                joint venture, employment, or franchisee relationship between
                you and Crafity.{" "}
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-rose-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-lg font-medium text-rose-900">
              No Support Obligations
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-rose-500 font-Poppins">
                This Agreement does not commit Crafity to any support
                obligations to you in connection with the Service. Such
                obligations, if any, will be specified in a separate agreement
                between you and Crafity.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-rose-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-rose-900">
              Commission and Fees
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-rose-500 font-Poppins">
                Crafity does not charge a listing fee. We will get a commission
                of 9% on every sale the Seller makes.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-rose-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-rose-900">
              Dispute with Other Users
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-rose-500 font-Poppins">
                If you find yourself in a dispute with another user of Crafity’
                Services or a third party, we encourage you to contact the other
                party and try to resolve the dispute amicably.
                <br />
                <b>Release of Crafity:</b>
                <br />
                You release Crafity from any claims, demands, and damages
                arising out of disputes with other users or parties. Commission
                and Fees Crafity does not charge a listing fee. We will get a
                commission of 9% on every sale the Seller makes.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-rose-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-rose-900">
              Service Interruptions
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-rose-500 font-Poppins">
                Crafity makes best efforts to maintain a stable and robust
                network architecture and will attempt to notify Customers of
                planned maintenance network interruptions; however Crafity
                accounts do not have guaranteed uptime. Service interruptions
                many occur at any time whether intentionally for maintenance or
                upgrade or unintentionally due to network error, outage,
                equipment failure or event.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-rose-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(8)}
          >
            <span className="text-lg font-medium text-rose-900">
              Your Content
            </span>
            {activeTab === 8 ? (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-rose-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 8 && (
            <div className="mt-4">
              <p className="text-base text-rose-500 font-Poppins">
                Content that you post using our Services is your content (so
                let’s refer to it as “Your Content”). We don’t make any claim to
                it, which includes anything you post using our Services (like
                shop names, profile pictures, listing photos, listing
                descriptions, reviews, comments, videos, usernames, etc.).
                <br />
                <b>A.</b> Responsibility for Your Content. You understand that
                you are solely responsible for Your Content. You represent that
                you have all necessary rights to Your Content and that you’re
                not infringing or violating any third party’s rights by posting
                it.
                <br />
                <b>B.</b> Permission to Use Your Content. By posting Your
                Content through our Services, you grant Crafity a license to use
                it. We don’t claim any ownership to Your Content, but we have
                your permission to use it to help Crafity function and grow.
                That way, we won’t infringe any rights you have in Your Content
                and we can help promote it. For example, you acknowledge and
                agree Crafity may offer you or Crafity’ buyers promotions on the
                Site, from time to time, that may relate to your listings.
                <br />
                <b>C.</b> Rights You Grant Crafity. (Here’s the legalese version
                of the last section). By posting Your Content, you grant Crafity
                a non-exclusive, worldwide, royalty-free, irrevocable,
                sub-licensable, perpetual license to use, display, edit, modify,
                reproduce, distribute, store, and prepare derivative works of
                Your Content. This allows us to provide the Services and to
                promote Crafity, your Crafity shop, or the Services in general,
                in any formats and through any channels, including across any
                Crafity Services, our partners, or third-party website or
                advertising medium. You agree not to assert any moral rights or
                rights of publicity against us for using Your Content. You also
                recognise our legitimate interest in using it, in accordance
                with the scope of this license, to the extent Your Content
                contains any personal information. That sounds like a lot, but
                it’s necessary for us to keep Crafity going. Consider these
                examples: if you upload a photo or video of a listing on your
                Crafity shop, we have permission to display it to buyers, and we
                can resize or enhance it so it looks good to a buyer using our
                mobile app; if you post a description in English, we can
                translate it into French so a buyer in Paris can learn the story
                behind your item; and if you post a beautiful photo or video of
                your latest handmade necklace, we can feature it - often along
                with your shop name and shop picture - on our homepage, in one
                of our blogs to help promote your business and Crafity’.
                <br />
                <b>D.</b> Reporting Unauthorised Content. Crafity has great
                respect for intellectual property rights, and is committed to
                following appropriate legal procedures to remove infringing
                content from the Services. If content that you own or have
                rights to has been posted to the Services without your
                permission and you want it removed, please contact us. If Your
                Content is alleged to infringe another person’s intellectual
                property, we will take appropriate action, such as disabling it
                if we receive proper notice or terminating your account if you
                are found to be a repeat infringer. We’ll notify you if any of
                that happens.
                <br />
                <b>E.</b> Inappropriate, False, or Misleading Content. This
                should be common sense, but there are certain types of content
                we don’t want posted on Crafity’ Services (for legal reasons or
                otherwise). You agree that you will not post any content that is
                abusive, threatening, defamatory, obscene, vulgar, or otherwise
                offensive or in violation of our Terms. You also agree not to
                post any content that is false and misleading or uses the
                Services in a manner that is fraudulent or deceptive.
              </p>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};
export default TermsandConditionPage;
