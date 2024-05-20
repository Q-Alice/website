import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Welcome to Qalice! These terms and conditions outline the rules and regulations for the use of our project,
          which focuses on providing comprehensive information and tools related to quantum computing and its various
          applications. By accessing this website, we assume you accept these terms and conditions. Do not continue to
          use Qalice if you do not agree to all of the terms and conditions stated on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, Qalice and/or its licensors own the intellectual property rights for all material on
          this website. All intellectual property rights are reserved. You may access this from Qalice for your own
          personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul className="list-disc ml-6">
          <li>Republish material from Qalice</li>
          <li>Sell, rent or sub-license material from Qalice</li>
          <li>Reproduce, duplicate or copy material from Qalice</li>
          <li>Redistribute content from Qalice</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
        <p>
          Parts of this website may offer an opportunity for users to post and exchange opinions and information in
          certain areas of the website. Qalice does not filter, edit, publish or review Comments prior to their presence
          on the website. Comments do not reflect the views and opinions of Qalice, its agents, and/or affiliates.
          Comments reflect the views and opinions of the person who posts their views and opinions. To the extent
          permitted by applicable laws, Qalice shall not be liable for the Comments or for any liability, damages or
          expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments
          on this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State],
          and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p>
          In no event shall Qalice, nor any of its officers, directors, and employees, be held liable for anything
          arising out of or in any way connected with your use of this website whether such liability is under contract.
          Qalice, including its officers, directors, and employees shall not be held liable for any indirect,
          consequential, or special liability arising out of or in any way related to your use of this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent Qalice from and against any and/or all liabilities, costs, demands,
          causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of
          these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Modification of Terms</h2>
        <p>
          Qalice is permitted to revise these Terms at any time as it sees fit, and by using this website you are
          expected to review these Terms on a regular basis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us.
        </p>
      </section>
    </div>
  );
};

export default TermsPage;
