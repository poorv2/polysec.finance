(this.webpackJsonpbnbstake = this.webpackJsonpbnbstake || []).push([[0], {
    247: function(e, t, n) {},
    249: function(e, t, n) {},
    261: function(e, t) {},
    283: function(e, t) {},
    285: function(e, t) {},
    411: function(e, t) {},
    413: function(e, t) {},
    445: function(e, t) {},
    450: function(e, t) {},
    452: function(e, t) {},
    459: function(e, t) {},
    472: function(e, t) {},
    576: function(e, t, n) {},
    577: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(1)
          , s = n.n(a)
          , c = n(29)
          , r = n.n(c)
          , i = (n(247),
        n(130))
          , l = n(19)
          , o = n.n(l)
          , d = n(26)
          , u = n(3)
          , b = n(6)
          , h = n(11)
          , j = n(10)
          , p = n(586)
          , m = n(587)
          , x = n(237)
          , f = n(588)
          , O = n(238)
          , y = n(591)
          , g = n(589)
          , v = n(592)
          , w = n(593)
          , N = n(590)
          , R = (n(249),
        n(232))
          , k = n.n(R)
          , P = n(234)
          , E = n.n(P)
          , B = n(82)
          , C = (n(568),
        n(235))
          , D = n.n(C)
          , A = n(236)
          , S = n.n(A)
          , I = n(0)
          , T = {
            fetching: !1,
            address: "",
            shortAddress: "",
            balance: null,
            web3: null,
            contract: null,
            provider: null,
            connected: !1,
            chainId: 1,
            networkId: 1,
            assets: [],
            showModal: !0,
            pendingRequest: !1,
            result: null,
            contractTotalStaked: "...",
            contractBalance: "...",
            contractPercent0: "...",
            contractPercent1: "...",
            contractPercent2: "...",
            contractPercent3: "...",
            contractPercent4: "...",
            contractPercent5: "...",
            contractPercent6: "...",
            contractPercent7: "...",
            contractPlan0Info: "...",
            contractPlan1Info: "...",
            contractPlan2Info: "...",
            contractPlan3Info: "...",
            contractPlan4Info: "...",
            contractPlan5Info: "...",
            contractUserAvailable: "...",
            contractUserTotalDeposits: "...",
            contractUserReferralTotalBonus: "...",
            contractUserReferralWithdrawn: "...",
            contractUserDownlineCount: "...",
            contractUserAmountOfDeposits: 0,
            contractUserDepositInfo: [],
            profit: ["...", "...", "...", "...", "...", "..."],
            bnb: "...",
            bnbisLoading: !1,
            ref: null
        };
        function U(e) {
            var t = new k.a(e);
            return t.eth.extend({
                methods: [{
                    name: "chainId",
                    call: "eth_chainId",
                    outputFormatter: t.utils.hexToNumber
                }]
            }),
            t
        }
        function M(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        function _(e, t) {
            var n = (e - t) / e * 100;
            return Math.round(Math.abs(n))
        }
        var F = function(e) {
            Object(h.a)(n, e);
            var t = Object(j.a)(n);
            function n(e) {
                var a;
                return Object(u.a)(this, n),
                (a = t.call(this, e)).ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "PERCENTS_DIVIDER",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserDownlineCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserDividends",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "forceWithdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserAvailable",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "TIME_STEP",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserReferrer",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserReferralTotalBonus",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PERCENT_STEP",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "referrer",
                "type": "address"
            },
            {
                "name": "plan",
                "type": "uint8"
            }
        ],
        "name": "invest",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "plan",
                "type": "uint8"
            },
            {
                "name": "deposit",
                "type": "uint256"
            }
        ],
        "name": "getResult",
        "outputs": [
            {
                "name": "percent",
                "type": "uint256"
            },
            {
                "name": "profit",
                "type": "uint256"
            },
            {
                "name": "finish",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "REFERRAL_PERCENTS",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalRefBonus",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserReferralWithdrawn",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserTotalDeposits",
        "outputs": [
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalStaked",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "dev",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "plan",
                "type": "uint8"
            }
        ],
        "name": "getPercent",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserAmountOfDeposits",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "plan",
                "type": "uint8"
            }
        ],
        "name": "getPlanInfo",
        "outputs": [
            {
                "name": "time",
                "type": "uint256"
            },
            {
                "name": "percent",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            },
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getUserDepositInfo",
        "outputs": [
            {
                "name": "plan",
                "type": "uint8"
            },
            {
                "name": "percent",
                "type": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "profit",
                "type": "uint256"
            },
            {
                "name": "start",
                "type": "uint256"
            },
            {
                "name": "finish",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "startUNIX",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "pro",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserCheckpoint",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "INVEST_MIN_AMOUNT",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "getUserReferralBonus",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PENALTY_STEP",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_dev",
                "type": "address"
            },
            {
                "name": "_pro",
                "type": "address"
            },
            {
                "name": "startDate",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "user",
                "type": "address"
            }
        ],
        "name": "Newbie",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "plan",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "percent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "profit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "start",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "finish",
                "type": "uint256"
            }
        ],
        "name": "NewDeposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "penaltyAmount",
                "type": "uint256"
            }
        ],
        "name": "ForceWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "referrer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "referral",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "level",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "RefBonus",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "totalAmount",
                "type": "uint256"
            }
        ],
        "name": "FeePayed",
        "type": "event"
    }
],
                a.CONTRACT = "0xB0d5300dC7230A137D4D738DA0113EB0E00a571d",
                a.URL = "https://polysec.finance",
                a.DEF_ADDRESS = "0xd408C892788528813E8703dA5DbAfd19Cd46Cd71",
                a.onConnect = Object(d.a)(o.a.mark((function e() {
                    var t, n, s, c, r, i, l, d;
                    return o.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                a.web3Modal.connect();
                            case 2:
                                return t = e.sent,
                                e.next = 5,
                                a.subscribeProvider(t);
                            case 5:
                                return n = U(t),
                                e.next = 8,
                                n.eth.getAccounts();
                            case 8:
                                return s = e.sent,
                                c = s[0],
                                r = c.substring(0, 6) + "..." + c.substring(38, 42),
                                e.next = 13,
                                n.eth.net.getId();
                            case 13:
                                return i = e.sent,
                                e.next = 16,
                                n.eth.chainId();
                            case 16:
                                return 137 != (l = e.sent) && D()({
                                    title: "Matic Mainnet error",
                                    text: "You need connect to Polygon(Matic) Mainnet first! \r\n\nClick to 'How to connect' button for get more details about it!",
                                    icon: "error",
                                    buttons: {
                                        info: "How to connect?",
                                        support: "Support"
                                    }
                                }).then((function(e) {
                                    "info" === e && window.open("https://stakingbits.com/setting-up-metamask-for-polygon-matic-network-838058f6d844", "_blank"),
                                    "support" === e && window.open("https://t.me/polysecsupport", "_blank")
                                }
                                )),
                                e.next = 20,
                                new n.eth.Contract(a.ABI,a.CONTRACT);
                            case 20:
                                return d = e.sent,
                                e.next = 23,
                                a.setState({
                                    web3: n,
                                    provider: t,
                                    connected: !0,
                                    address: c,
                                    shortAddress: r,
                                    contract: d,
                                    chainId: l,
                                    networkId: i
                                });
                            case 23:
                                return e.next = 25,
                                a.getAccountAssets();
                            case 25:
                                return e.next = 27,
                                a.readData();
                            case 27:
                                return e.next = 29,
                                a.updateData();
                            case 29:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                a.subscribeProvider = function() {
                    var e = Object(d.a)(o.a.mark((function e(t) {
                        return o.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t.on) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    t.on("close", (function() {
                                        return a.resetApp()
                                    }
                                    )),
                                    t.on("accountsChanged", function() {
                                        var e = Object(d.a)(o.a.mark((function e(t) {
                                            return o.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        window.location.reload();
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()),
                                    t.on("chainChanged", function() {
                                        var e = Object(d.a)(o.a.mark((function e(t) {
                                            return o.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        window.location.reload();
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()),
                                    t.on("networkChanged", function() {
                                        var e = Object(d.a)(o.a.mark((function e(t) {
                                            return o.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        window.location.reload();
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.getAccountAssets = Object(d.a)(o.a.mark((function e() {
                    var t, n, s, c;
                    return o.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = a.state,
                                n = t.address,
                                s = t.web3,
                                a.setState({
                                    fetching: !0
                                }),
                                e.prev = 2,
                                e.next = 5,
                                s.eth.getBalance(n);
                            case 5:
                                return e.t0 = e.sent,
                                e.t1 = Math.pow(10, 18),
                                c = e.t0 / e.t1,
                                e.next = 10,
                                a.setState({
                                    fetching: !1,
                                    balance: c
                                });
                            case 10:
                                e.next = 17;
                                break;
                            case 12:
                                return e.prev = 12,
                                e.t2 = e.catch(2),
                                console.error(e.t2),
                                e.next = 17,
                                a.setState({
                                    fetching: !1
                                });
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 12]])
                }
                ))),
                a.resetApp = Object(d.a)(o.a.mark((function e() {
                    var t;
                    return o.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!((t = a.state.web3) && t.currentProvider && t.currentProvider.close)) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 4,
                                t.currentProvider.close();
                            case 4:
                                return e.next = 6,
                                a.web3Modal.clearCachedProvider();
                            case 6:
                                a.setState(Object(i.a)({}, T));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                a.readData = Object(d.a)(o.a.mark((function e() {
                    var t;
                    return o.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = a.state.contract,
                                e.next = 3,
                                t.methods.totalStaked().call().then((function(e) {
                                    var t = M(Number(a.state.web3.utils.fromWei(e)).toFixed(3));
                                    a.setState({
                                        contractTotalStaked: t
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.totalStaked", e)
                                }
                                ));
                            case 3:
                                return e.next = 5,
                                t.methods.getContractBalance().call().then((function(e) {
                                    var t = M(Number(a.state.web3.utils.fromWei(e)).toFixed(3));
                                    a.setState({
                                        contractBalance: t
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getContractBalance", e)
                                }
                                ));
                            case 5:
                                return e.next = 7,
                                t.methods.getPercent(0).call().then((function(e) {
                                    a.setState({
                                        contractPercent0: e / 10
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getPercent 0", e)
                                }
                                ));
                            case 7:
                                return e.next = 9,
                                t.methods.getPercent(1).call().then((function(e) {
                                    a.setState({
                                        contractPercent1: e / 10
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getPercent 1", e)
                                }
                                ));
                            case 9:
                                return e.next = 11,
                                t.methods.getPercent(2).call().then((function(e) {
                                    a.setState({
                                        contractPercent2: e / 10
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getPercent 2", e)
                                }
                                ));
                            case 11:
                                return e.next = 13,

                                t.methods.getPercent(3).call().then((function(e) {
                                    a.setState({
                                        contractPercent3: e / 10
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getPercent 3", e)
                                }
                                ));
                            case 13:
                                return e.next = 14,

                                t.methods.getPercent(4).call().then((function(e) {
                                    a.setState({
                                        contractPercent4: e / 10
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getPercent 4", e)
                                }
                                ));
                            case 14:
                                return e.next = 15,

                                t.methods.getPercent(5).call().then((function(e) {
                                    a.setState({
                                        contractPercent5: e / 10
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getPercent 5", e)
                                }
                                ));
                            case 15:
                                return e.next = 16,

                                t.methods.getPercent(6).call().then((function(e) {
                                    a.setState({
                                        contractPercent6: e / 10
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getPercent 6", e)
                                }
                                ));
                            case 16:
                                return e.next = 17,

                                t.methods.getPercent(7).call().then((function(e) {
                                    a.setState({
                                        contractPercent7: e / 10
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getPercent 7", e)
                                }
                                ))
                                ;
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                a.updateData = Object(d.a)(o.a.mark((function e() {
                    var t, n, s, c, r, i;
                    return o.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = a.state.contract,
                                e.next = 3,
                                t.methods.getUserAvailable(a.state.address).call().then((function(e) {
                                    var t = M(Number(a.state.web3.utils.fromWei(e)).toFixed(3));
                                    a.setState({
                                        contractUserAvailable: t
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getUserAvailable", e)
                                }
                                ));
                            case 3:
                                return e.next = 5,
                                t.methods.getUserTotalDeposits(a.state.address).call().then((function(e) {
                                    var t = M(Number(a.state.web3.utils.fromWei(e)).toFixed(3));
                                    a.setState({
                                        contractUserTotalDeposits: t
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getUserTotalDeposits", e)
                                }
                                ));
                            case 5:
                                return e.next = 7,
                                t.methods.getUserReferralTotalBonus(a.state.address).call().then((function(e) {
                                    var t = M(Number(a.state.web3.utils.fromWei(e)).toFixed(3));
                                    a.setState({
                                        contractUserReferralTotalBonus: t
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getUserReferralTotalBonus", e)
                                }
                                ));
                            case 7:
                                return e.next = 9,
                                t.methods.getUserReferralWithdrawn(a.state.address).call().then((function(e) {
                                    var t = M(Number(a.state.web3.utils.fromWei(e)).toFixed(3));
                                    a.setState({
                                        contractUserReferralWithdrawn: t
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getUserReferralWithdrawn", e)
                                }
                                ));
                            case 9:
                                return e.next = 11,
                                t.methods.getUserDownlineCount(a.state.address).call().then((function(e) {
                                    var t = Number(e[0]) + Number(e[1]) + Number(e[2]);
                                    a.setState({
                                        contractUserDownlineCount: t
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getUserDownlineCount", e)
                                }
                                ));
                            case 11:
                                return e.next = 13,
                                t.methods.getUserAmountOfDeposits(a.state.address).call().then((function(e) {
                                    a.setState({
                                        contractUserAmountOfDeposits: Number(e)
                                    })
                                }
                                )).catch((function(e) {
                                    console.log("ERROR", "bsc.getUserAmountOfDeposits", e)
                                }
                                ));
                            case 13:
                                n = [],
                                s = [14, 21, 28, 35, 14, 21, 28, 35],
                                c = Math.floor(Date.now() / 1e3),
                                r = o.a.mark((function e(r) {
                                    return o.a.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                t.methods.getUserDepositInfo(a.state.address, r).call().then((function(e) {
                                                    n[r] = e,
                                                    n[r].daysLeft = (Number(e.finish - c) / 84600).toFixed(2),
                                                    n[r].daysLeft <= 0 ? n[r].status = "finish" : n[r].status = "active";
                                                    var t = _(s[n[r].plan], n[r].daysLeft);
                                                    n[r].percentFinish = t > 100 ? 100 : t,
                                                    n[r].amount = M(Number(a.state.web3.utils.fromWei(n[r].amount)).toFixed(3)),
                                                    n[r].profit = M(Number(a.state.web3.utils.fromWei(n[r].profit)).toFixed(3)),
                                                    n[r].plan = Number(n[r].plan) + 1,
                                                    n[r].percent = Number(n[r].percent) / 10
                                                }
                                                )).catch((function(e) {
                                                    console.log("ERROR", "bsc.getUserDepositInfo " + r, e)
                                                }
                                                ));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )),
                                i = 0;
                            case 18:
                                if (!(i < a.state.contractUserAmountOfDeposits)) {
                                    e.next = 23;
                                    break
                                }
                                return e.delegateYield(r(i), "t0", 20);
                            case 20:
                                i++,
                                e.next = 18;
                                break;
                            case 23:
                                a.setState({
                                    contractUserDepositInfo: n
                                });
                            case 24:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                a.state = Object(i.a)({}, T),
                a.web3Modal = new E.a({
                    network: "bsc_mainnet",
                    cacheProvider: !0
                }),
                a
            }
            return Object(b.a)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = Object(d.a)(o.a.mark((function e() {
                        var t, n, a = this;
                        return o.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.web3Modal.cachedProvider) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3,
                                    this.onConnect();
                                case 3:
                                    this.countdown = setInterval(this.updateData, 1e4);
                                case 4:
                                    "" != (t = window.location.search) ? ({},
                                    (n = /[?&]([^=#]+)=([^&#]*)/g.exec(t))[1] && "ref" == n[1] ? this.setState({
                                        ref: n[2]
                                    }) : this.setState({
                                        ref: this.DEF_ADDRESS
                                    })) : this.setState({
                                        ref: this.DEF_ADDRESS
                                    }),
                                    fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd").then((function(e) {
                                        return e.json()
                                    }
                                    )).then((function(e) {
                                        a.setState({
                                            bnbisLoading: !0,
                                            bnb: e.binancecoin.usd
                                        })
                                    }
                                    ), (function(e) {
                                        a.setState({
                                            bnbisLoading: !0,
                                            bnb: null
                                        })
                                    }
                                    ));
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = Object(d.a)(o.a.mark((function e() {
                        return o.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    clearInterval(this.countdown);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "handleChange",
                value: function(e, t) {
                    var n = e.target.value
                      , a = 0;
                    if (0 == t && (a = (n * (this.state.contractPercent0 / 100) * 14).toFixed(2),
                    c.render(a, document.getElementById("plan0profit"))),
                    1 == t && (a = (n * (this.state.contractPercent1 / 100) * 21).toFixed(2),
                    c.render(a, document.getElementById("plan1profit"))),
                    2 == t && (a = (n * (this.state.contractPercent2 / 100) * 28).toFixed(2),
                    c.render(a, document.getElementById("plan2profit"))),
                    3 == t && (a = (n * (this.state.contractPercent3 / 100) * 35).toFixed(2),
                    c.render(a, document.getElementById("plan3profit"))),

                    4 == t) {
                        for (var s = 100, r = 0; r < 14; r++)
                            s += s * (this.state.contractPercent4 / 100);
                        a = (n * (s - 100) / 100).toFixed(2),
                        c.render(a, document.getElementById("plan4profit"))
                    }
                    if (5 == t) {
                        for (var i = 100, l = 0; l < 21; l++)
                            i += i * (this.state.contractPercent5 / 100);
                        a = (n * (i - 100) / 100).toFixed(2),
                        c.render(a, document.getElementById("plan5profit"))
                    }
                    if (6 == t) {
                        for (var o = 100, d = 0; d < 28; d++)
                            o += o * (this.state.contractPercent6 / 100);
                        a = (n * (o - 100) / 100).toFixed(2),
                        c.render(a, document.getElementById("plan6profit"))
                    }
                    if (7 == t) {
                        for (var o = 100, d = 0; d < 35; d++)
                            o += o * (this.state.contractPercent7 / 100);
                        a = (n * (o - 100) / 100).toFixed(2),
                        c.render(a, document.getElementById("plan7profit"))
                    }

                }
            }, {
                key: "invest",
                value: function() {
                    var e = Object(d.a)(o.a.mark((function e(t, n) {
                        var a, s;
                        return o.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = this.state,
                                    a.web3,
                                    s = a.contract,
                                    e.next = 3,
                                    s.methods.invest(this.state.ref, n).send({
                                        from: this.state.address,
                                        value: this.state.web3.utils.toWei(t)
                                    }).then((function(e) {
                                        B.b.success("Transaction Successful!")
                                    }
                                    )).catch((function(e) {
                                        console.log("ERROR", "bsc.invest", e)
                                    }
                                    ));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "withdraw",
                value: function() {
                    var e = Object(d.a)(o.a.mark((function e() {
                        var t, n;
                        return o.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.state,
                                    t.web3,
                                    n = t.contract,
                                    e.next = 3,
                                    n.methods.withdraw().send({
                                        from: this.state.address
                                    }).then((function(e) {
                                        B.b.success("Withdraw successful!")
                                    }
                                    )).catch((function(e) {
                                        console.log("ERROR", "bsc.withdraw", e)
                                    }
                                    ));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }
            , {
                key: "forceWithdraw",
                value: function() {
                    var e = Object(d.a)(o.a.mark((function e(IN) {
                        var t, n;
                        return o.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.state,
                                    t.web3,
                                    n = t.contract,
                                    e.next = 3,
                                    n.methods.forceWithdraw(IN).send({
                                        from: this.state.address
                                    }).then((function(e) {
                                        B.b.success("forceWithdraw successful!")
                                    }
                                    )).catch((function(e) {
                                        console.log("ERROR", "bsc.withdraw", e)
                                    }
                                    ));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }
            , {
                key: "render",
                value: function() {
                    var e = this;
                    function t(e, t) {
                        return "..." !== e ? Math.round(e * t) : "..."
                    }
                    function n(e, t) {
                        if ("..." !== e) {
                            for (var n = 100, a = 0; a < t; a++)
                                n += n * (e / 100);
                            return Math.round(n - 100)
                        }
                        return "..."
                    }
                    return Object(I.jsxs)(p.a, {
                        children: [Object(I.jsxs)(m.a, {
                            className: "align-items-center mb-4",
                            children: [Object(I.jsx)("div", {
                                className: "header_background"
                            }), Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 2,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsx)(f.a, {
                                    src: "logo.png?v=1"
                                })
                            }), Object(I.jsxs)(x.a, {
                                xl: 2,
                                lg: 2,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                className: "top text-center",
                                children: [!this.state.connected && Object(I.jsx)(O.a, {
                                    className: "btn-binance-bg border-color-none",
                                    variant: "success",
                                    size: "sm",
                                    onClick: this.onConnect,
                                    children: "Connect Wallet"
                                }), this.state.connected && Object(I.jsx)(O.a, {
                                    variant: "outline-success",
                                    size: "sm",
                                    children: this.state.shortAddress
                                })]
                            }), Object(I.jsxs)(x.a, {
                                xl: 7,
                                lg: 8,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                className: "top text-right d-none d-sm-none d-md-block",
                                children: [Object(I.jsxs)(y.a, {
                                    style: {
                                        display: "inline"
                                    },
                                })
                                /*Object(I.jsx)(O.a,{variant:"info",className:"btn-sm",href:"https://t.me/bnb_claim",target:"_blank",className:"btn-sm",rel:"noreferrer",children:"Telegram Group"})*/
                                , "\xa0\xa0\xa0", Object(I.jsx)(O.a, {
                                    variant: "",
                                    className: "fab fa-telegram",
                                    href: "https://t.me/polysecchat",
                                    target: "_blank",
                                    rel: "noreferrer",
                                }), Object(I.jsx)(O.a, {
                                    variant: "",
                                    className: "fab fa-twitter",
                                    href: "https://twitter.com/polysecfi",
                                    target: "_blank",
                                    rel: "noreferrer",
                                }), Object(I.jsx)(O.a, {
                                    variant: "",
                                    className: "fab fa-reddit",
                                    href: "https://reddit.com/user/polysecfinance",
                                    target: "_blank",
                                    rel: "noreferrer",
                                }), Object(I.jsx)(O.a, {
                                    variant: "",
                                    className: "fab fa-tiktok",
                                    href: "https://tiktok.com/@poly_sec",
                                    target: "_blank",
                                    rel: "noreferrer",                                       
                                }), Object(I.jsx)(O.a, {
                                    variant: "",
                                    className: "fab fa-medium",
                                    href: "https://polysec.medium.com",
                                    target: "_blank",
                                    rel: "noreferrer",                                        
                                }), Object(I.jsx)(O.a, {
                                    variant: "",
                                    className: "fab fa-facebook",
                                    href: "https://facebook.com/polysec-110177127941200",
                                    target: "_blank",
                                    rel: "noreferrer",                                    
                                }), Object(I.jsx)(O.a, {
                                    variant: "",
                                    className: "fab fa-instagram",
                                    href: "https://instagram.com/poly_sec",
                                    target: "_blank",
                                    rel: "noreferrer", /*"\xa0\xa0\xa0", Object(I.jsx)(O.a,{variant:"warning",className:"btn-sm",href:"https://polysec.finance/static/BNBclaimPresentation.pdf",target:"_blank",className:"btn-sm",rel:"noreferrer",children:"Presentation"}),                          /*,Object(I.jsx)(O.a,{href:"https://t.me/bnbstakesupport",target:"_blank",className:"btn-sm btn-light",rel:"noreferrer",children:"Support"}),"\xa0\xa0\xa0",Object(I.jsxs)(y.a,{style:{display:"inline"},children:[Object(I.jsx)(y.a.Toggle,{variant:"info",className:"btn-sm",children:"Telegram"}),Object(I.jsxs)(y.a.Menu,{children:[Object(I.jsx)(y.a.Item,{href:"https://t.me/Bnb_stakes",rel:"noreferrer",target:"_blank",children:"English Group"}),Object(I.jsx)(y.a.Item,{href:"https://t.me/Bnb_Stake_espanol",rel:"noreferrer",target:"_blank",children:"Espa\xf1ol Group"})]})]}),"\xa0\xa0\xa0",/*Object(I.jsxs)(y.a,{style:{display:"inline"},children:[Object(I.jsx)(y.a.Toggle,{variant:"primary",className:"btn-sm",children:"Audit"}),Object(I.jsxs)(y.a.Menu,{children:[Object(I.jsx)(y.a.Item,{href:"https://hazecrypto.net/wp-content/uploads/2021/03/HazeSecurity_BNBStake.pdf",rel:"noreferrer",target:"_blank",children:"PDF Report"}),Object(I.jsx)(y.a.Item,{href:"https://youtu.be/J_UG28Wm-tU",rel:"noreferrer",target:"_blank",children:"Video Report"})]})]}),"\xa0\xa0\xa0",Object(I.jsx)(O.a,{href:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",target:"_blank",rel:"noreferrer",className:"btn-sm btn-success",children:"Help"}),*/
                                    }), "\xa0\xa0\xa0", Object(I.jsx)(O.a, {
                                    variant: "primary",
                                    className: "btn-sm",
                                    href: "https://polysec.finance/static/audit.pdf",
                                    target: "_blank",
                                    className: "btn-sm",
                                    rel: "noreferrer",
                                    children: "Audit"
                                    }),
                                "\xa0\xa0\xa0", Object(I.jsxs)(y.a, {
                                    style: {
                                        display: "inline"
                                    },
                                    children: [Object(I.jsx)(y.a.Toggle, {
                                        variant: "warning",
                                        className: "btn-sm",
                                        children: "Presentation"
                                    }), Object(I.jsxs)(y.a.Menu, {
                                        children: [Object(I.jsx)(y.a.Item, {
                                            href: "https://polysec.finance/static/presentation.pdf",
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: "English PDF"
                                        })]
                                    })]
                                })/*,"\xa0\xa0\xa0",Object(I.jsxs)(y.a,{style:{display:"none"},children:[Object(I.jsx)(y.a.Toggle,{variant:"dark",className:"btn-sm",children:"EN"}),Object(I.jsxs)(y.a.Menu,{children:[Object(I.jsx)(y.a.Item,{href:"https://t.me/Bnb_stakes",rel:"noreferrer",target:"_blank",children:"English"}),Object(I.jsx)(y.a.Item,{href:"https://t.me/Bnb_Stake_espanol",rel:"noreferrer",target:"_blank",children:"Espa\xf1ol"})]})]})*/
                                ]
                            })]
                        }), Object(I.jsxs)(m.a, {
                            className: "info-box",
                            children: [Object(I.jsx)(x.a, {
                                xl: 8,
                                lg: 8,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                className: "mb-4",
                                children: Object(I.jsxs)("div", {
                                    className: "box-gradient",
                                    children: [Object(I.jsxs)("p", {
                                        children: ["Total income: based on your tarrif plan (", Object(I.jsx)("b", {
                                            children: "from 4% to 8% daily"
                                        }), ") "]
                                    }), Object(I.jsxs)("p", {
                                        children: ["Basic interest rate: ", Object(I.jsx)("b", {
                                            children: "+0.3% every 24 hours"
                                        }), " - only for new deposits"]
                                    }), Object(I.jsxs)("p", {
                                        children: ["Minimal deposit: ", Object(I.jsx)("b", {
                                            children: "10 MATIC"
                                        }), ", no maximal limit"]
                                    }), Object(I.jsxs)("p", {
                                        children: ["Earnings ", Object(I.jsx)("b", {
                                            children: "every moment"
                                        }), ", withdraw ", Object(I.jsx)("b", {
                                            children: "any time"
                                        }), " (if you use capitalization of interest you can withdraw only after end of your deposit)"]
                                    }), Object(I.jsxs)("p", {
                                        children: ["Investors can ", , Object(I.jsx)("b", {
                                            children: "terminate"
                                        }), " their stakes and get 50% of their fund back while the remaining goes into the pool. (plan 1,2,3,4 are not allowed to terminate after withdrawing interest)."]
                                    })]
                                })
                            }), Object(I.jsxs)(x.a, {
                                xl: 4,
                                lg: 4,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                className: "mb-4",
                                children: [Object(I.jsxs)("p", {
                                    children: ["Total MATIC Staked ", Object(I.jsx)("a", {
                                        href: "https://polygonscan.com/address/0xB0d5300dC7230A137D4D738DA0113EB0E00a571d",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: Object(I.jsx)(g.a, {
                                            className: "ml-2",
                                            variant: "primary",
                                            children: "Contract"
                                        })
                                    })]
                                }), Object(I.jsx)("h2", {
                                    children: this.state.contractTotalStaked
                                }), Object(I.jsx)("p", {
                                    children: "Total Contract Balance"
                                }), Object(I.jsx)("h2", {
                                    children: this.state.contractBalance
                                })]
                            })]
                        }),
                        Object(I.jsxs)(m.a, {
                            className: "mb-4",
                            children: [
                            Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 3,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box text-center",
                                    children: [Object(I.jsx)("div", {
                                        className: "plan-box-name",
                                        children: "Plan 1"
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Daily Profit"
                                            }), Object(I.jsxs)("h2", {
                                                children: [this.state.contractPercent0, "%"]
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Total Return"
                                            }), Object(I.jsxs)("h2", {
                                                children: [t(this.state.contractPercent0, 14), "%"]
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Withdraw time"
                                            }), Object(I.jsx)("h3", {
                                                children: "Any Time"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Days"
                                            }), Object(I.jsx)("h2", {
                                                children: "14"
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Enter Amount"
                                            }), Object(I.jsx)(v.a.Control, {
                                                onChange: function(t) {
                                                    return e.handleChange(t, "0")
                                                },
                                                size: "lg",
                                                className: "btn-secondary",
                                                type: "text",
                                                placeholder: "10",
                                                id: "plan0amount"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "In 14 days you will get"
                                            }), Object(I.jsx)("h4", {
                                                id: "plan0profit",
                                                children: "..."
                                            })]
                                        })]
                                    }), Object(I.jsx)(O.a, {
                                        className: "mt-2",
                                        size: "lg",
                                        block: !0,
                                        variant: "warning",
                                        onClick: function() {
                                            return e.invest(document.getElementById("plan0amount").value, 0)
                                        },
                                        children: "STAKE MATIC"
                                    })]
                                })
                            })
                            , Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 3,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box text-center",
                                    children: [Object(I.jsx)("div", {
                                        className: "plan-box-name",
                                        children: "Plan 2"
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Daily Profit"
                                            }), Object(I.jsxs)("h2", {
                                                children: [this.state.contractPercent1, "%"]
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Total Return"
                                            }), Object(I.jsxs)("h2", {
                                                children: [t(this.state.contractPercent1, 21), "%"]
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Withdraw time"
                                            }), Object(I.jsx)("h3", {
                                                children: "Any Time"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Days"
                                            }), Object(I.jsx)("h2", {
                                                children: "21"
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Enter Amount"
                                            }), Object(I.jsx)(v.a.Control, {
                                                onChange: function(t) {
                                                    return e.handleChange(t, "1")
                                                },
                                                size: "lg",
                                                className: "btn-secondary",
                                                type: "text",
                                                placeholder: "10",
                                                id: "plan1amount"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "In 21 days you will get"
                                            }), Object(I.jsx)("h4", {
                                                id: "plan1profit",
                                                children: "..."
                                            })]
                                        })]
                                    }), Object(I.jsx)(O.a, {
                                        className: "mt-2",
                                        size: "lg",
                                        block: !0,
                                        variant: "warning",
                                        onClick: function() {
                                            return e.invest(document.getElementById("plan1amount").value, 1)
                                        },
                                        children: "STAKE MATIC"
                                    })]
                                })
                            })
                            , Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 3,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box text-center",
                                    children: [Object(I.jsx)("div", {
                                        className: "plan-box-name",
                                        children: "Plan 3"
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Daily Profit"
                                            }), Object(I.jsxs)("h2", {
                                                children: [this.state.contractPercent2, "%"]
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Total Return"
                                            }), Object(I.jsxs)("h2", {
                                                children: [t(this.state.contractPercent2, 28), "%"]
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Withdraw time"
                                            }), Object(I.jsx)("h3", {
                                                children: "Any Time"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Days"
                                            }), Object(I.jsx)("h2", {
                                                children: "28"
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Enter Amount"
                                            }), Object(I.jsx)(v.a.Control, {
                                                onChange: function(t) {
                                                    return e.handleChange(t, "2")
                                                },
                                                size: "lg",
                                                className: "btn-secondary",
                                                type: "text",
                                                placeholder: "10",
                                                id: "plan2amount"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "In 28 days you will get"
                                            }), Object(I.jsx)("h4", {
                                                id: "plan2profit",
                                                children: "..."
                                            })]
                                        })]
                                    }), Object(I.jsx)(O.a, {
                                        className: "mt-2",
                                        size: "lg",
                                        block: !0,
                                        variant: "warning",
                                        onClick: function() {
                                            return e.invest(document.getElementById("plan2amount").value, 2)
                                        },
                                        children: "STAKE MATIC"
                                    })]
                                })
                            })
                            , Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 3,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box text-center",
                                    children: [Object(I.jsx)("div", {
                                        className: "plan-box-name",
                                        children: "Plan 4"
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Daily Profit"
                                            }), Object(I.jsxs)("h2", {
                                                children: [this.state.contractPercent3, "%"]
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Total Return"
                                            }), Object(I.jsxs)("h2", {
                                                children: [t(this.state.contractPercent3, 35), "%"]
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Withdraw time"
                                            }), Object(I.jsx)("h3", {
                                                children: "Any Time"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Days"
                                            }), Object(I.jsx)("h2", {
                                                children: "35"
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Enter Amount"
                                            }), Object(I.jsx)(v.a.Control, {
                                                onChange: function(t) {
                                                    return e.handleChange(t, "3")
                                                },
                                                size: "lg",
                                                className: "btn-secondary",
                                                type: "text",
                                                placeholder: "10",
                                                id: "plan3amount"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "In 35 days you will get"
                                            }), Object(I.jsx)("h4", {
                                                id: "plan3profit",
                                                children: "..."
                                            })]
                                        })]
                                    }), Object(I.jsx)(O.a, {
                                        className: "mt-2",
                                        size: "lg",
                                        block: !0,
                                        variant: "warning",
                                        onClick: function() {
                                            return e.invest(document.getElementById("plan3amount").value, 3)
                                        },
                                        children: "STAKE MATIC"
                                    })]
                                })
                            })
                            ]
                        })
                        , Object(I.jsxs)(m.a, {
                            className: "mb-4",
                            children: [
                            Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 3,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box1 text-center",
                                    children: [Object(I.jsx)("div", {
                                        className: "plan-box-name1",
                                        children: "Plan 5"
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Daily Profit"
                                            }), Object(I.jsxs)("h2", {
                                                children: [this.state.contractPercent4, "%"]
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Total Return"
                                            }), Object(I.jsxs)("h2", {
                                                children: [n(this.state.contractPercent4, 14), "%"]
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Withdraw time"
                                            }), Object(I.jsx)("h3", {
                                                children: "End of Plan"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Days"
                                            }), Object(I.jsx)("h2", {
                                                children: "14"
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Enter Amount"
                                            }), Object(I.jsx)(v.a.Control, {
                                                onChange: function(t) {
                                                    return e.handleChange(t, "4")
                                                },
                                                size: "lg",
                                                className: "btn-secondary",
                                                type: "text",
                                                placeholder: "10",
                                                id: "plan4amount"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "In 14 days you will get"
                                            }), Object(I.jsx)("h4", {
                                                id: "plan4profit",
                                                children: "..."
                                            })]
                                        })]
                                    }), Object(I.jsx)(O.a, {
                                        className: "mt-2",
                                        size: "lg",
                                        block: !0,
                                        variant: "success",
                                        onClick: function() {
                                            return e.invest(document.getElementById("plan4amount").value, 4)
                                        },
                                        children: "STAKE MATIC"
                                    }), Object(I.jsx)("i", {
                                        className: "small",
                                        children: "* plan use capitalization of interest"
                                    })]
                                })
                            }),
                            Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 3,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box1 text-center",
                                    children: [Object(I.jsx)("div", {
                                        className: "plan-box-name1",
                                        children: "Plan 6"
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Daily Profit"
                                            }), Object(I.jsxs)("h2", {
                                                children: [this.state.contractPercent5, "%"]
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Total Return"
                                            }), Object(I.jsxs)("h2", {
                                                children: [n(this.state.contractPercent5, 21), "%"]
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Withdraw time"
                                            }), Object(I.jsx)("h3", {
                                                children: "End of Plan"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Days"
                                            }), Object(I.jsx)("h2", {
                                                children: "21"
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Enter Amount"
                                            }), Object(I.jsx)(v.a.Control, {
                                                onChange: function(t) {
                                                    return e.handleChange(t, "5")
                                                },
                                                size: "lg",
                                                className: "btn-secondary",
                                                type: "text",
                                                placeholder: "10",
                                                id: "plan5amount"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "In 21 days you will get"
                                            }), Object(I.jsx)("h4", {
                                                id: "plan5profit",
                                                children: "..."
                                            })]
                                        })]
                                    }), Object(I.jsx)(O.a, {
                                        className: "mt-2",
                                        size: "lg",
                                        block: !0,
                                        variant: "success",
                                        onClick: function() {
                                            return e.invest(document.getElementById("plan5amount").value, 5)
                                        },
                                        children: "STAKE MATIC"
                                    }), Object(I.jsx)("i", {
                                        className: "small",
                                        children: "* plan use capitalization of interest"
                                    })]
                                })
                            })
                            , Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 3,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box1 text-center",
                                    children: [Object(I.jsx)("div", {
                                        className: "plan-box-name1",
                                        children: "Plan 7"
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Daily Profit"
                                            }), Object(I.jsxs)("h2", {
                                                children: [this.state.contractPercent6, "%"]
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Total Return"
                                            }), Object(I.jsxs)("h2", {
                                                children: [n(this.state.contractPercent6, 28), "%"]
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Withdraw time"
                                            }), Object(I.jsx)("h3", {
                                                children: "End of Plan"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Days"
                                            }), Object(I.jsx)("h2", {
                                                children: "28"
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Enter Amount"
                                            }), Object(I.jsx)(v.a.Control, {
                                                onChange: function(t) {
                                                    return e.handleChange(t, "6")
                                                },
                                                size: "lg",
                                                className: "btn-secondary",
                                                type: "text",
                                                placeholder: "10",
                                                id: "plan6amount"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "In 28 days you will get"
                                            }), Object(I.jsx)("h4", {
                                                id: "plan6profit",
                                                children: "..."
                                            })]
                                        })]
                                    }), Object(I.jsx)(O.a, {
                                        className: "mt-2",
                                        size: "lg",
                                        block: !0,
                                        variant: "success",
                                        onClick: function() {
                                            return e.invest(document.getElementById("plan6amount").value, 6)
                                        },
                                        children: "STAKE MATIC"
                                    }), Object(I.jsx)("i", {
                                        className: "small",
                                        children: "* plan use capitalization of interest"
                                    })]
                                })
                            })
                            , Object(I.jsx)(x.a, {
                                xl: 3,
                                lg: 3,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box1 text-center",
                                    children: [Object(I.jsx)("div", {
                                        className: "plan-box-name1",
                                        children: "Plan 8"
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Daily Profit"
                                            }), Object(I.jsxs)("h2", {
                                                children: [this.state.contractPercent7, "%"]
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Total Return"
                                            }), Object(I.jsxs)("h2", {
                                                children: [n(this.state.contractPercent7, 35), "%"]
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Withdraw time"
                                            }), Object(I.jsx)("h3", {
                                                children: "End of Plan"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Days"
                                            }), Object(I.jsx)("h2", {
                                                children: "35"
                                            })]
                                        })]
                                    }), Object(I.jsxs)(m.a, {
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "Enter Amount"
                                            }), Object(I.jsx)(v.a.Control, {
                                                onChange: function(t) {
                                                    return e.handleChange(t, "7")
                                                },
                                                size: "lg",
                                                className: "btn-secondary",
                                                type: "text",
                                                placeholder: "10",
                                                id: "plan7amount"
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                children: "In 35 days you will get"
                                            }), Object(I.jsx)("h4", {
                                                id: "plan7profit",
                                                children: "..."
                                            })]
                                        })]
                                    }), Object(I.jsx)(O.a, {
                                        className: "mt-2",
                                        size: "lg",
                                        block: !0,
                                        variant: "success",
                                        onClick: function() {
                                            return e.invest(document.getElementById("plan7amount").value, 7)
                                        },
                                        children: "STAKE MATIC"
                                    }), Object(I.jsx)("i", {
                                        className: "small",
                                        children: "* plan use capitalization of interest"
                                    })]
                                })
                            })
                            ]
                        }), Object(I.jsxs)("p", {
                            className: "small",
                            children: ["1. Important: Plans return are float and daily profit for a new deposit will increase by 0.3% daily", Object(I.jsx)("br", {}), "2. Minimum deposit amount is 10 MATIC and you can have multiple deposits", Object(I.jsx)("br", {}), "3. Earnings from plan 1-4 can be withdrawn anytime", Object(I.jsx)("br", {}), "4. Investors can terminate their stakes and get 50% of their fund back while the remaining goes into the pool. (plan 1,2,3,4 are not allowed to terminate after withdrawing interest)."]
                        }), Object(I.jsxs)(m.a, {
                            className: "mb-4",
                            children: [Object(I.jsx)(x.a, {
                                xl: 4,
                                lg: 4,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "box-gradient1",
                                    children: [Object(I.jsx)("p", {
                                        children: "Total Staked MATIC"
                                    }), Object(I.jsx)("h2", {
                                        children: this.state.contractUserTotalDeposits
                                    }), Object(I.jsx)("p", {
                                        children: "Available MATIC for withdrawal"
                                    }), Object(I.jsx)("h2", {
                                        children: this.state.contractUserAvailable
                                    }), Object(I.jsx)(O.a, {
                                        variant: "dark",
                                        size: "lg",
                                        onClick: function() {
                                            return e.withdraw()
                                        },
                                        children: "Withdraw MATIC"
                                    })]
                                })
                            }), Object(I.jsx)(x.a, {
                                xl: 8,
                                lg: 8,
                                md: 12,
                                sm: 12,
                                xs: 12,
                                children: Object(I.jsxs)("div", {
                                    className: "plan-box",
                                    children: [Object(I.jsx)("p", {
                                        children: "Your Referral Link"
                                    }), Object(I.jsx)(v.a, {
                                        children: Object(I.jsxs)(v.a.Row, {
                                            className: "align-items-center",
                                            children: [Object(I.jsx)(x.a, {
                                                xs: "11",
                                                children: Object(I.jsx)(v.a.Control, {
                                                    inline: !0,
                                                    size: "xl",
                                                    className: "btn-secondary",
                                                    type: "text",
                                                    value: this.URL + "/?ref=" + this.state.address
                                                })
                                            }), Object(I.jsx)(x.a, {
                                                children: Object(I.jsx)(S.a, {
                                                    text: this.URL + "/?ref=" + this.state.address,
                                                    onSuccess: function(e) {
                                                        return B.b.success("Referral Link Copied!")
                                                    },
                                                    onError: function(e) {
                                                        return console.log(e)
                                                    },
                                                    children: Object(I.jsx)(O.a, {
                                                        inline: !0,
                                                        size: "xl",
                                                        variant: "success",
                                                        children: Object(I.jsx)(N.a, {
                                                            size: 20,
                                                            className: "mt-0"
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    }), Object(I.jsxs)(m.a, {
                                        className: "mt-2",
                                        children: [Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                className: "mt-4 mb-0",
                                                children: "Total Referral Earned"
                                            }), Object(I.jsx)("h5", {
                                                children: this.state.contractUserReferralTotalBonus
                                            }), Object(I.jsx)("p", {
                                                className: "mt-4 mb-0",
                                                children: "Invited Users by You"
                                            }), Object(I.jsx)("h5", {
                                                children: this.state.contractUserDownlineCount
                                            })]
                                        }), Object(I.jsxs)(x.a, {
                                            children: [Object(I.jsx)("p", {
                                                className: "mt-4 mb-0",
                                                children: "Total Referral Withdrawn"
                                            }), Object(I.jsx)("h5", {
                                                children: this.state.contractUserReferralWithdrawn
                                            })]
                                        }), Object(I.jsx)(x.a, {
                                            children: Object(I.jsxs)("p", {
                                                className: "mt-4 mb-0",
                                                children: ["Earn for promotion PolySec", Object(I.jsx)("br", {}), Object(I.jsx)("br", {}), "You will receive:", Object(I.jsx)("br", {}), Object(I.jsx)("br", {}), Object(I.jsx)("b", {
                                                    children: "6%"
                                                }), " from each referral deposits", Object(I.jsx)("br", {}), Object(I.jsx)("br", {}), Object(I.jsx)("i", {
                                                    children: "Note! You need to have at least 1 deposit to start receive earnings"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), Object(I.jsx)(m.a, {
                            className: "mb-4",
                            children: Object(I.jsxs)(x.a, {
                                children: [Object(I.jsx)("h2", {
                                    children: "Your Stake"
                                }), this.state.contractUserDepositInfo.map((function(z, index) {
                                    return Object(I.jsxs)("div", {
                                        className: "plan-box-info",
                                        style: {
                                            opacity: 100 == z.percentFinish ? "40%" : "unset"
                                        },
                                        children: [
                                        Object(I.jsxs)(m.a, {
                                            children: [Object(I.jsxs)(x.a, {
                                                children: [Object(I.jsxs)(g.a, {
                                                    variant: z.plan > 4 ? "success" : "warning",
                                                    children: ["Plan ", z.plan]
                                                }), Object(I.jsx)("br", {}), z.percent, "%"]
                                            })
                                            , Object(I.jsx)(x.a, {
                                                className: "text-center",
                                                children: Object(I.jsx)("button", {
                                                    onClick: function() {
                                                        return e.forceWithdraw(index)
                                                    },
                                                    className: z.plan >= 4 ? "btn btn-primary btn-sm" : "d-none",
                                                    children: "withdraw"
                                                })
                                            })
                                            , Object(I.jsx)(x.a, {
                                                className: "text-center",
                                                children: Object(I.jsx)(g.a, {
                                                    variant: z.plan > 4 ? "success" : "warning",
                                                    size: "lg",
                                                    children: z.status
                                                })
                                            })
                                            , Object(I.jsxs)(x.a, {
                                                className: "text-right",
                                                children: [new Intl.DateTimeFormat("en-GB",{
                                                    month: "short",
                                                    day: "2-digit"
                                                }).format(1e3 * z.start), "\xa0\u2192", Object(I.jsx)("br", {}), new Intl.DateTimeFormat("en-GB",{
                                                    month: "short",
                                                    day: "2-digit"
                                                }).format(1e3 * z.finish)]
                                            })]
                                        })
                                        , Object(I.jsxs)(m.a, {
                                            children: [Object(I.jsxs)(x.a, {
                                                className: "text-left",
                                                children: [Object(I.jsx)("h2", {
                                                    children: z.amount
                                                }), Object(I.jsx)("p", {
                                                    children: "MATIC"
                                                })]
                                            }), Object(I.jsxs)(x.a, {
                                                className: "text-right",
                                                children: [Object(I.jsx)("h2", {
                                                    children: z.profit
                                                }), Object(I.jsx)("p", {
                                                    children: "MATIC"
                                                })]
                                            })]
                                        }), Object(I.jsx)(w.a, {
                                            variant: z.plan > 4 ? "success" : "warning",
                                            now: z.percentFinish,
                                            label: z.percentFinish + "%"
                                        })]
                                    }, z.start)
                                }

                                ))]
                            })
                        }), Object(I.jsx)(m.a, {
                            className: "footer",
                            children: Object(I.jsx)(x.a, {
                                className: "text-center",
                                children: Object(I.jsx)(f.a, {
                                    src: "footer.png",
                                    fluid: !0
                                })
                            })
                        }), Object(I.jsx)(m.a, {
                            className: "footer mb-5"
                            ,children:Object(I.jsxs)(x.a,{className:"text-center",children:["Reviews: ",Object(I.jsx)("a",{href:"https://dappradar.com/polygon/high-risk/polysec",target:"_blank",rel:"noreferrer",children:"dAppradar.com"}),", \xa0",Object(I.jsx)("a",{href:"https://dapp.review/dapp/15185",target:"_blank",rel:"noreferrer",children:"Dapp.Review"}),", \xa0",Object(I.jsx)("a",{href:"https://www.dappstats.com/dapp/polysec",target:"_blank",rel:"noreferrer",children:"Dappstats.com"}),", \xa0",Object(I.jsx)("a",{href:"https://www.awesomepolygon.com/polysec",target:"_blank",rel:"noreferrer",children:"Awesomepolygon.com"}),", \xa0",Object(I.jsx)("a",{href:"https://www.coincodex.com/dapp/polysec",target:"_blank",rel:"noreferrer",children:"Coincodex.com"})]}) 
                        }), Object(I.jsxs)(m.a, {
                            className: "footer",
                            children: [Object(I.jsxs)(x.a, {
                                className: "text-left ml-5",
                                children: ["Powered by", Object(I.jsx)("br", {}), Object(I.jsx)("a", {
                                    href: "https://polygon.technology",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "POLYGON"
                                })]
                            }), /*Object(I.jsxs)(x.a,{className:"text-center",children:["Audited by HazeCrypto",Object(I.jsx)("br",{}),Object(I.jsx)("a",{href:"https://hazecrypto.net/wp-content/uploads/2021/03/HazeSecurity_BNBStake.pdf",target:"_blank",rel:"noreferrer",children:"Download Audit PDF Report"})]})*/
                            , Object(I.jsxs)(x.a, {
                                className: "text-right mr-5",
                                children: ["\xa9 2021 by AV. All rights reserved.", Object(I.jsx)("br", {}), Object(I.jsx)("a", {
                                    href: "https://polysec.finance",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "https://polysec.finance"
                                })]
                            })]
                        }), Object(I.jsx)("br", {}), Object(I.jsx)(B.a, {})]
                    })
                }
            }]),
            n
        }(a.Component)
          , z = function(e) {
            e && e instanceof Function && n.e(3).then(n.bind(null, 594)).then((function(t) {
                var n = t.getCLS
                  , a = t.getFID
                  , s = t.getFCP
                  , c = t.getLCP
                  , r = t.getTTFB;
                n(e),
                a(e),
                s(e),
                c(e),
                r(e)
            }
            ))
        };
        n(576);
        r.a.render(Object(I.jsx)(s.a.StrictMode, {
            children: Object(I.jsx)(F, {})
        }), document.getElementById("root")),
        z()
    }
}, [[577, 1, 2]]]);
