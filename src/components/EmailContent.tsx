import React from 'react';

const EmailContent: React.FC = () => {
    const emailAddresses = 'investments@northwestern.edu,nuprovost@northwestern.edu';
    const ccAddresses = 'nudisclosure@gmail.com';
    const subject = 'Disclosure Request';
    const body = `Dear Northwestern Investment and Provost Offices,
  
  I, [Your Name], am requesting information under the agreement made between Northwestern University and representatives of the Northwestern University Liberated Zone on 29 April 2024. Section 2 of the Agreement states that “Northwestern will answer questions from any internal stakeholder about specific holdings, held currently or within the last quarter, to the best of its knowledge and to the extent legally possible,” and that it will “do so within 30 days, or, if unable to respond within 30 days, will provide a reason and a realistic timeline.”
  
  As a [student/instructor/staff member/alum, etc] at Northwestern, and in accordance with the provisions above, I request that the University produce the following information:
  
  All current investments (direct and indirect holdings) involving the following corporation(s):
  
  [List corporations and further financial requests here - see “Northwestern Disclosure List” (link in bio) for a working list of recommended companies]
  
  I expect that you will comply with this request within the specified timeframe.
  
  Sincerely,
  [Your Name]`;
  
    const mailtoLink = `mailto:${emailAddresses}?cc=${ccAddresses}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


  const emailStyle: React.CSSProperties = { color: 'blue', textDecoration: 'underline' };
  const boldStyle: React.CSSProperties = { fontWeight: 'bold' };

  return (
    // MAKE THIS FONT GLACIALINDIFFERENCE
    <div style={{ fontFamily: 'Arial, sans-serif', whiteSpace: 'pre-wrap' }}>
        <a href={mailtoLink} target="_blank">Send Email</a>
        <br />
        <br />
        Or:
        <br />
        <br />
      To: <span style={emailStyle}>investments@northwestern.edu</span>, <span style={emailStyle}>nuprovost@northwestern.edu</span>
      <br />
      Cc: <span style={emailStyle}>nudisclosure@gmail.com</span>
      <br />
      <span style={boldStyle}>**Please remember to cc the above address so we can track request responses from NU</span>
      <br />
      <br />
      Subject: Disclosure Request
      <br />
      Body:
      <br />
      <br />
      Dear Northwestern Investment and Provost Offices,
      <br />
      <br />
      I, <span style={boldStyle}>[Your Name]</span>, am requesting information under the agreement made between Northwestern University and representatives of the Northwestern University Liberated Zone on 29 April 2024. Section 2 of the Agreement states that “Northwestern will answer questions from any internal stakeholder about specific holdings, held currently or within the last quarter, to the best of its knowledge and to the extent legally possible,” and that it will “do so within 30 days, or, if unable to respond within 30 days, will provide a reason and a realistic timeline.”
      <br />
      <br />
      As a <span style={boldStyle}>[student/instructor/staff member/alum, etc]</span> at Northwestern, and in accordance with the provisions above, I request that the University produce the following information:
      <br />
      <br />
      All current investments (direct and indirect holdings) involving the following corporation(s):
      <br />
      <br />
      <span style={boldStyle}>[List corporations and further financial requests here - see “Northwestern Disclosure List” (link in bio) for a working list of recommended companies]</span>
      <br />
      <br />
      I expect that you will comply with this request within the specified timeframe.
      <br />
      <br />
      Sincerely,
      <br />
      <span style={boldStyle}>[Your Name]</span>
    </div>
  );
};

export default EmailContent;
