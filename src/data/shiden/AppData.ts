import { StatusData } from '../StatusData';
import { RuleData } from '../RuleData';
import { FaqData } from '../FaqData';

// Todo: update value and words

const statusItems = <StatusData[]>[
  { value: 27170, description: 'Participants' },
  { value: 10333552, description: 'KSM Contributed' },
  { value: 1400000000, description: 'SDN to be Distributed' }
];

const ruleItems = <RuleData[]>[
  {
    title: 'Parachain Auction',
    rule: 'Kusama is a shared protocol that enables blockchain networks to operate together seamlessly. To be a part of the Kusama network, Shiden Network must secure a slot during the Kusama parachain auction. We are raising KSM from our community to help win the auction.'
  },

  {
    title: 'SDN Token Distribution',
    rule: '1 month after successfully securing a Kusama parachain slot, Shiden network’s native token (SDN) will be distributed to the crowdloan participants’ addresses. The participants who join the crowdloan through exchanges will be able to see their balance once we enable token transfers.'
  },
  {
    title: 'Number of SDN token',
    rule: 'The number of SDN tokens the participants will receive is determined based on many KSMs they lock for Shiden, the total amount of locked KSMs in the crowdloan and bonus.'
  }
];

const faqItems = <FaqData[]>[
  {
    question: 'How many SDN will I get for joining the Kusama PLO?',
    answer:
      'This depends on the lease/lock period of KSM and a few other factors such as total locked KSM. The token allocation for the PLO is capped and we will distribute a total of around XX% of our token supply to those who join the PLO (incl bonus).'
  },
  {
    question: 'What does it mean to unbond my KSM, and how do I do it?',
    answer:
      'When nominating on Kusama, you have a delayed exit period, called the unbonding period, which serves as a cooldown. You will not be able to transfer your tokens before this period has elapsed. Read more and find instructions on the Kusama web page.'
  },
  {
    question: 'How long will the KSM tokens be locked?',
    answer:
      'Your KSM will be locked for the full duration of the Shiden parachain lease. This means that KSM will be locked for 96 weeks. Once the lease expires, KSM will be automatically returned.'
  },
  {
    question: 'What if Shiden Network doesn’t win the parachain auction?',
    answer:
      'If Shiden does not win the auction, your KSM will be automatically returned immediately (but Shiden aims to become the first one).'
  },
  {
    question: 'Where can I find all the information?',
    answer:
      'You can find all the information regarding Kusama auctions and Shiden Crowdloan event here: <a href="https://docs.astar.network/learn/parachain-lease-offering" target="_blank" style="color: #0070ff">Docs</a>.'
  }
];

export { statusItems, ruleItems, faqItems };