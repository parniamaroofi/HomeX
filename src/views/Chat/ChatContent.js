export default {
  props: ['chatData'],

  setup(props) {
    const messages = ref(props.chatData.messages);
    const interval = ref('');
    const hasReply = ref(false);
    const replyMessage = ref({});
    const smoothScroll = ref(false);
    const showGoDownBtn = ref(false);
    const hasNewMessage = ref(false);
    const repliedMessageID = ref('');
    const boldMessageStyle = ref('');
    const months = reactive([
      'Junuary',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);

    return {
      months,
      interval,
      messages,
      hasReply,
      replyMessage,
      smoothScroll,
      showGoDownBtn,
      hasNewMessage,
      repliedMessageID,
      boldMessageStyle,
    };
  },

  mounted() {
    this.scrollToEnd();

    this.emitter.on('scrollToEnd', () => {
      this.scrollToEnd();
    });
  },

  methods: {
    // This function is called to change the display form of the date
    formattedDate(date) {
      let year = date.split('-')[0]; // GET YEAR of the date
      let month = Number(date.split('-')[1]); // GET MONTH of the date
      let day = Number(date.split('-')[2]); // GET DAY of the date
      let monthName = this.months[month]; // Get the name of the month ex: April, June,...
      return monthName + ' ' + day + ', ' + year;
    },

    // This function is called to go to the beginning of the messages box of a date
    goToDate(date) {
      document.getElementById(date).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },

    // This function is called to reply a message
    doReplyMessage(message) {
      this.hasReply = true;
      this.replyMessage = message;
      document.getElementById('field_box').focus();

      let content = document.querySelector('.chat_content');
      if (content.scrollTop > content.scrollHeight - 1000) {
        setTimeout(() => {
          this.scrollToEnd();
        }, 10);
      }
    },

    // this function scroll the page to the bottom in every refreshing
    scrollToEnd() {
      var container = document.querySelector('.chat_content');
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },

    // This function is called to show the replied meesage we clicked on it
    showMessage(messageId) {
      this.repliedMessageID = messageId;

      if (document.getElementById(messageId)) {
        document.getElementById(messageId).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        this.boldMessageStyle =
          'background-color: #c9c8eb48; border-radius:10px; transition: .3s linear;';

        clearInterval(this.interval);
        this.interval = setInterval(() => {
          this.boldMessageStyle = 'background-color: transparent;transition: .3s linear;';
        }, 2000);
      }
    },

    // This function is called to show time only once for messages sent at the same time
    computedMessageTime(item, index) {
      if (item[Number(index) + 1]) {
        if (item[Number(index) + 1].senderName == item[Number(index)].senderName) {
          if (item[Number(index) + 1].time == item[Number(index)].time) {
            return false;
          } else return true;
        } else return true;
      } else return true;
    },

    // This function is called to detect message text direction
    messageDirection(value) {
      if (value) {
        var rtl_rx = /[\u0591-\u07FF]/;
        return rtl_rx.test(value) ? 'rtl' : 'ltr';
      } else return 'ltr';
    },

    removeBrTags(str) {
      if (str) {
        return str.replaceAll('<br>', ' ');
      }
    },

    // This function is called to recognize to show "go down button" or not
    computedGoDownButton() {
      var container = document.querySelector('.chat_content');

      if (
        parseInt(container.scrollTop) <
        container.scrollHeight -
          container.offsetHeight -
          parseInt(container.getBoundingClientRect().height / 5)
      ) {
        this.showGoDownBtn = true;
      } else {
        this.showGoDownBtn = false;
        this.hasNewMessage = false;
      }
    },
  },
};
