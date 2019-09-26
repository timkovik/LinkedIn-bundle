function linkedInBundle(selector){
  let linkedInScript = document.createElement('script');
  linkedInScript.src = 'https://platform.linkedin.com/in.js';
  linkedInScript.text = 'lang: ru_RU';
  linkedInScript.type = 'text/javascript';
  document.querySelector(selector).append(linkedInScript);
  
  let shareButton = document.createElement('script');
  let followCompany = document.createElement('script');
  shareButton.type = "IN/Share";
  shareButton.setAttribute('data-url', location.href);
  followCompany.type = "IN/FollowCompany";
  followCompany.setAttribute('data-id', "28823669");
  
  let autofillScript = document.createElement('script');
  autofillScript.src = 'https://www.linkedin.com/autofill/js/autofill.js';
  autofillScript.type = 'text/javascript';
  autofillScript.async = true;
  
  document.querySelector(selector).append(shareButton, ' ',followCompany);
}

linkedInBundle('div');
