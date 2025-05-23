class bank {
  static bankName = "ssk bank";
  static totalaccounts = 0;
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.accountNo = ++bank.totalaccounts;
  }
  showAccount() {
    return `account No: ${this.accountNo} ,name:${this.name}`;
  }
  static getBanking() {
    return bank.bankName;
  }
  static getTotalAccounts() {
    return bank.totalaccounts;
  }
}
