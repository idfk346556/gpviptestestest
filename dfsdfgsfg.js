<script>
    window.onload = function () {
        var links = document.querySelector("a.checkout_link");
        for (var i = 0, n = links.length; i < n; i++) {
            var href = links[i].href.trim() +
                    (links[i].href.indexOf("?") > 0 ? '&' : '?') +
                    document.location.search.replace('?', '').toString();
            links[i].href = href;
        }
    }

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
<style>

  .hide {
    display: none!important;
  }
  typebot-standard {
    position: relative;
    z-index: 9999;
  }
  #__next {
    position: relative;
    z-index: 9999;
}
  /* User Bar */
.user-bar {
  width: 100%;
  height: 55px;
  background: #005e54;
  color: #fff;
  padding: 0;
  font-size: 24px;
  position: fixed;
  z-index: 99999;
  display: block;
  top: 0;
}

.user-bar:after {
  content: "";
  display: table;
  clear: both;
}

.user-bar div {
    float: left;
    transform: translateY(-50%);
    position: relative;
    top: 50%;
    margin-left: 10px;
}
  

.user-bar .actions {
  float: right;
  margin: 0 0 0 20px;
}

.user-bar .actions.more {
  margin: 0 12px 0 32px;
}

.user-bar .actions.attachment {
  margin: 0 0 0 30px;
}

.user-bar .actions.attachment i {
  display: block;
  transform: rotate(-45deg);
}

.user-bar .avatar {
  margin: 0 0 0 5px;
  width: 36px;
  height: 36px;
}

.user-bar .avatar img {
  border-radius: 50%;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
  display: block;
  width: 100%;
}

.user-bar .name {
  font-size: 17px;
  font-weight: 600;
  text-overflow: ellipsis;
  letter-spacing: 0.3px;
  margin: 0 0 0 8px;
  overflow: hidden;
  white-space: nowrap;
  width: 150px;
}

.user-bar .status {
  display: block;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
}
</style>

<script>
function criarBarra() {
  var userBar = document.createElement("div");
  userBar.className = "user-bar";

  var backButton = document.createElement("div");
  backButton.className = "back";
  backButton.innerHTML = '<i class="zmdi zmdi-arrow-left"></i>';

  var avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="https://i.ibb.co/MGV7n2V/icon.jpg" alt="GRUPO VIP">';

 var name = document.createElement("div");

name.className = "name";

name.innerHTML = '<span>GRUPO VIP</span> <span data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span><span class="status">online</span>';

  var moreActions = document.createElement("div");
  moreActions.className = "actions more";
  moreActions.innerHTML = '<i class="zmdi zmdi-more-vert"></i>';

  var attachmentAction = document.createElement("div");
  attachmentAction.className = "actions attachment";
  attachmentAction.innerHTML = '<i class="zmdi zmdi-attachment-alt"></i>';

  var phoneAction = document.createElement("div");
  phoneAction.className = "actions";
  phoneAction.innerHTML = '<i class="zmdi zmdi-phone"></i>';

  userBar.appendChild(backButton);
  userBar.appendChild(avatar);
  userBar.appendChild(name);
  userBar.appendChild(moreActions);
  userBar.appendChild(attachmentAction);
  userBar.appendChild(phoneAction);

  var elementoPai = document.querySelector("#__next");
  if (elementoPai) {
    elementoPai.insertBefore(userBar, elementoPai.firstChild);
  }
}

criarBarra();
</script>
<script>
  
  const botBody = document.querySelector('typebot-standard')
        .shadowRoot.querySelector('.typebot-container');
  const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
  const status = document.querySelector('.status');
  
  setInterval(() => {
      const isTyping = botBody.querySelector('.bubble1');
      const sibling = isTyping?.parentElement?.parentElement?.nextSibling;

      if(isTyping && sibling.src) {
        status.innerText = 'gravando audio...'
      } else if(isTyping) {      
        status.innerText = 'digitando...'
      } else {
        status.innerText = 'online'
      }
    }, 400)
</script>