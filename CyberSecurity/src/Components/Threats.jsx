import React from 'react'

const Threats = () => {
    return (
        <>
            <div className='space-y-8 xl:space-y-16'>
                <h1 className='text-white font-["Roboto"] px-5 text-[24px] font-bold tracking-[3px] text-center lg:text-[44px] xl:text-[56px]'>KEY CYBER THREATS</h1>
                <div className='lg:grid grid-cols-2 gap-x-10 gap-y-12 mx-auto max-w-[400px] md:max-w-[450px] lg:max-w-[950px] xl:max-w-[1270px] 2xl:max-w-[1350px] space-y-12 lg:space-y-0 px-3 lg:px-2'>
                    <div className='lg:flex gap-8'>
                        <h1 className='text-[#454545] pl-7 lg:pl-0 text-3xl lg:text-4xl font-extrabold'>01</h1>
                        <div className='font-["Roboto"] space-y-5 pt-2'>
                            <h1 className='text-white pl-7 lg:pl-0 text-xl lg:text-2xl font-extrabold'>Malware</h1>
                            <p className='text-[#848484] text-sm lg:text-base font-["Montserrat"]'>Malware is malicious software that is intentionally designed to cause harm to computers or networks. It includes viruses, worms, spyware, adware, and trojans. Once malware infects a system, it can steal sensitive information, damage files, monitor online activity, or even take control of the system for malicious purposes. Malware often spreads through email attachments, malicious downloads, or infected websites, making it a significant threat to both individuals and businesses.</p>
                        </div>
                    </div>
                    <div className='lg:flex gap-8'>
                        <h1 className='text-[#454545] pl-7 lg:pl-0 text-3xl lg:text-4xl font-extrabold'>02</h1>
                        <div className='font-["Roboto"] space-y-5 pt-2'>
                            <h1 className='text-white pl-7 lg:pl-0 text-xl lg:text-2xl font-extrabold'>Phishing</h1>
                            <p className='text-[#848484] text-sm lg:text-base font-["Montserrat"]'>Phishing is a type of cyberattack where attackers impersonate legitimate entities, such as banks, social media platforms, or government organizations, to deceive users into revealing personal information, such as usernames, passwords, or credit card numbers. Phishing attacks are commonly carried out through deceptive emails, fake websites, or phone calls. These fraudulent attempts can lead to identity theft, financial losses, and unauthorized access to sensitive accounts or data.</p>
                        </div>
                    </div>
                    <div className='lg:flex gap-8'>
                        <h1 className='text-[#454545] pl-7 lg:pl-0 text-3xl lg:text-4xl font-extrabold'>03</h1>
                        <div className='font-["Roboto"] space-y-5 pt-2'>
                            <h1 className='text-white pl-7 lg:pl-0 text-xl lg:text-2xl font-extrabold'>Insider Threats</h1>
                            <p className='text-[#848484] text-sm lg:text-base font-["Montserrat"]'>Insider threats occur when individuals within an organization, such as employees, contractors, or business partners, intentionally or unintentionally compromise sensitive information or security. These individuals may have access to proprietary data, passwords, or systems, and may misuse their privileges to steal, leak, or manipulate sensitive information. Insider threats are particularly challenging to detect because the attackers are trusted insiders. Examples include stealing intellectual property, sabotaging systems, or leaking confidential data.</p>
                        </div>
                    </div>
                    <div className='lg:flex gap-8'>
                        <h1 className='text-[#454545] pl-7 lg:pl-0 text-3xl lg:text-4xl font-extrabold'>04</h1>
                        <div className='font-["Roboto"] space-y-5 pt-2'>
                            <h1 className='text-white pl-7 lg:pl-0 text-xl lg:text-2xl font-extrabold'>Ransomware</h1>
                            <p className='text-[#848484] text-sm lg:text-base font-["Montserrat"]'>Ransomware is a type of malicious software that encrypts the victim's files, making them inaccessible. The attacker then demands a ransom, typically in cryptocurrency, in exchange for decrypting the files. If the ransom is not paid, the files may be permanently lost, or the attacker may leak sensitive data. Ransomware attacks can cripple businesses, halt operations, and result in significant financial loss. Some ransomware variants also threaten to publicly release stolen data unless the ransom is paid.</p>
                        </div>
                    </div>
                    <div className='lg:flex gap-8'>
                        <h1 className='text-[#454545] pl-7 lg:pl-0 text-3xl lg:text-4xl font-extrabold'>05</h1>
                        <div className='font-["Roboto"] space-y-5 pt-2'>
                            <h1 className='text-white pl-7 lg:pl-0 text-xl lg:text-2xl font-extrabold'>Distributed Denial-of-Service (DDoS) Attacks</h1>
                            <p className='text-[#848484] text-sm lg:text-base font-["Montserrat"]'>A DDoS attack involves overwhelming a targeted system, server, or network with a flood of internet traffic to exhaust its resources and make it unable to respond to legitimate requests. These attacks are typically launched by a network of compromised computers, known as a botnet, which makes it difficult to trace the origin of the attack. DDoS attacks can result in downtime for websites, e-commerce platforms, and online services, leading to a loss of revenue and customer trust.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Threats