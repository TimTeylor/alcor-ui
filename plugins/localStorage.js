import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'presist_v0.1',
    paths: [
      'chain.payForUser', 'swap.slippage', 'chain.lastWallet',
      'market.showVolumeInUSD', 'market.markets_active_tab'
    ]
  })(store)
}
