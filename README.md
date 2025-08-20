1. To check the request and response format with browser.
  1.1. Open developer tools by pressing ctrl + shift + i and go to network tab (I have used chrome browser).
   <img width="1069" height="679" alt="network tab" src="https://github.com/user-attachments/assets/38961bd5-2bf5-4326-b3c3-72cd110706cc" />
  1.2. Click on any file. (I clicked on new-tab-page).
  1.3. There are several other tabs like header, preview, response, initiator, timing.( tab gives the request format and response tab gives response format).
    1.3.1. HEADER tab : <img width="711" height="544" alt="request" src="https://github.com/user-attachments/assets/52ce818d-020e-4069-85e8-140939472f37" />
    1.3.2. RESPONSE tab : <img width="706" height="613" alt="response" src="https://github.com/user-attachments/assets/cbd9a51a-b1da-45fc-a5f0-bb285480a532" />

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. To check the IP Address and DNS of my Machine.
   2.1. Open Settings => Network & Internet => Wifi / Ethernet (Depending upon what you are using, I used wifi).
   2.2. Go to your connected wifi name.
   2.3. Scroll down, we will see the IP address and DNS (in my case it was IPv4 address).
   <img width="931" height="189" alt="IP and dns" src="https://github.com/user-attachments/assets/4502ba2e-488c-482b-95ef-8e67d1ea3965" />

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. What are the publically available DNS that are free to use.
    1. Google Public DNS
       
	    Primary: 8.8.8.8
	    Secondary: 8.8.4.4
	    Pros: Very reliable, fast, globally distributed.
	    Cons: Google may log your DNS queries for analytics.

   2. Cloudflare DNS

	    Primary: 1.1.1.1
	    Secondary: 1.0.0.1
	    Pros: Focus on privacy, fast, supports DNS over HTTPS (DoH) and DNS over TLS (DoT).
	    Cons: Newer than Google, so slightly less tested worldwide.

   3. OpenDNS (by Cisco)

	    Primary: 208.67.222.222
	    Secondary: 208.67.220.220
	    Pros: Supports parental controls, phishing protection.
	    Cons: Some features require a free account signup.

   4. Quad9

	  Primary: 9.9.9.9
	  Secondary: 149.112.112.112
	  Pros: Focus on security by blocking malicious domains automatically.
	  Cons: Privacy policies are good, but slightly slower in some regions.

   5. CleanBrowsing

	    Family Filter: 185.228.168.168
	    Adult Filter: 185.228.168.10
	    Security Filter: 185.228.168.9
	    Pros: Great for safe browsing and filtering content.
	    Cons: Some advanced features need paid subscription.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

4.How to change the DNS of my Machine.

  4.1. Open Settings => Network & Internet => Wifi / Ethernet (Depending upon what you are using, I used wifi).
  4.2. Go to your connected wifi name.
  4.3. Scroll down, there will be two editable assignments .i.e. 1.IP assignment and 2.DNS server assignment
  4.4. Click on the edit button of DNS server assignment.
  4.5. By default it is set to Automatic (DHCP), change it to Manal.
  4.6. When selected Manual, two new options will come .i.e. IPv4 and IPv6, we have to turn on atleast one of them(I choosed IPv4).
  <img width="743" height="964" alt="image" src="https://github.com/user-attachments/assets/cb8b3e8a-d71f-4341-bc78-23f19e2d23f3" />

  4.7. Add your preferred DNS(Both Primary and Secondary).
  <img width="721" height="958" alt="image" src="https://github.com/user-attachments/assets/cd2ea436-9fe8-4c5d-851b-0580bd862b33" />
  4.8. Click on save and th DNS is changed.
  <img width="816" height="258" alt="image" src="https://github.com/user-attachments/assets/34f445b9-f340-4c06-adcc-e49445e66fdb" />

