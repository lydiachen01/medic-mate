const DisclaimerText = () => (
    <div className="flex text-center mx-auto border border-slate-300 max-w-[70vw] pt-24">
        <div className="font-bold">DISCLAIMER</div>
        <ol>
            <li>
                <strong>No Medical Advice</strong>
                <p>This application ("the App") is intended for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. The information provided within the App, including medication details, potential interactions, and warnings, should not be relied upon as medical guidance. Always consult a licensed healthcare professional before making any decisions regarding your medication, treatment, or healthcare needs.</p>
            </li>
            <li>
                <strong>No Doctor-Patient Relationship</strong>
                <p>Use of the App does not establish a doctor-patient relationship between the user and any healthcare provider. The App does not offer personalized medical recommendations, and any reliance on the information provided is solely at the user's risk.</p>
            </li>
            <li>
                <strong>Accuracy and Limitations of Information</strong>
                <p>While we strive to ensure that the information contained in the App is accurate and up to date, we do not guarantee its completeness, reliability, or applicability to any specific medical condition. The App's database may contain outdated, incomplete, or incorrect information due to the evolving nature of medical knowledge and pharmaceutical updates.</p>
                <p>Additionally, the App may use third-party data sources, which may introduce errors or inconsistencies. Users are advised to verify critical medication information with healthcare providers or official medical resources before making any decisions based on the App's content.</p>
            </li>
            <li>
                <strong>Third-Party Integrations and External Links</strong>
                <p>The App may integrate with or provide links to third-party websites, applications, or services for additional medical information, pharmacy services, or telehealth consultations. We do not endorse, control, or assume responsibility for the accuracy, reliability, or security of any third-party content, services, or privacy practices. Users should review the terms and policies of third-party services before engaging with them.</p>
            </li>
            <li>
                <strong>Privacy and Data Security</strong>
                <p>We take reasonable measures to safeguard user data, including medication records, in compliance with applicable data protection laws (such as HIPAA, GDPR, or other jurisdictional regulations). However, no digital system is completely secure, and we cannot guarantee absolute protection against unauthorized access, data breaches, or cyber threats.</p>
                <p>By using the App, users acknowledge that they share and store personal health information at their own risk. We strongly advise users to use strong passwords, enable security features, and avoid sharing sensitive medical data over unsecured networks.</p>
            </li>
            <li>
                <strong>Compliance and Legal Limitations</strong>
                <p>The App is not a regulated medical device, nor does it claim to comply with all medical, pharmaceutical, or healthcare regulations in every jurisdiction. Users are responsible for ensuring that the App's use aligns with local laws and healthcare guidelines applicable to their location.</p>
                <p>Healthcare professionals using the App must independently verify medication information and ensure compliance with medical best practices, licensing regulations, and institutional policies.</p>
            </li>
            <li>
                <strong>Limitation of Liability</strong>
                <p>To the fullest extent permitted by law, the App, its developers, affiliates, partners, and licensors shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from:</p>
                <ul>
                    <li>Errors, omissions, or inaccuracies in the medication database;</li>
                    <li>Adverse drug reactions, missed doses, or incorrect medication administration;</li>
                    <li>Unauthorized access, data breaches, or loss of personal information;</li>
                    <li>Reliance on information provided by the App instead of professional medical advice.</li>
                </ul>
                <p>Users agree to use the App at their own risk and waive any claims against the App's providers for damages resulting from the use or misuse of the App.</p>
            </li>
            <li>
                <strong>Changes to this Disclaimer</strong>
                <p>We reserve the right to modify this Disclaimer at any time without prior notice. Users are encouraged to review this Disclaimer periodically to stay informed of any updates. Continued use of the App following any changes constitutes acceptance of the revised terms.</p>
            </li>
        </ol>
    </div>
);

const Disclaimer:React.FC = () => {

    return (
        <div>
            <DisclaimerText />
        </div>
    )
}

export default Disclaimer