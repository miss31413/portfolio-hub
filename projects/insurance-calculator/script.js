function calculateInsurance() {
    const age = parseInt(document.getElementById('age').value) || 0;
    const income = parseInt(document.getElementById('income').value) || 0;
    const coverage = parseInt(document.getElementById('coverage').value) || 0;
    
    if (age <= 0 || income <= 0 || coverage <= 0) {
        alert('請輸入有效的數伐');
        return;
    }
    
    // 基於年齡計算保費比率
    let rate = 0.05; // 基毎
    if (age < 30) {
        rate = 0.03;
    } else if (age >= 30 && age < 40) {
        rate = 0.04;
    } else if (age >= 40 && age < 50) {
        rate = 0.06;
    } else if (age >= 50 && age < 60) {
        rate = 0.08;
    } else {
        rate = 0.10;
    }
    
    // 基於月薪賊建議頢養
    let suggestedCoverage = Math.round((income * 12) / 100);
    if (suggestedCoverage < coverage) {
        suggestedCoverage = coverage;
    }
    
    // 計算每月保費
    const monthlyPremium = Math.round((suggestedCoverage * 10000 * rate) / 12);
    const annualPremium = monthlyPremium * 12;
    
    // 顯示結果
    document.getElementById('resultAmount').textContent = '$ ' + (suggestedCoverage * 10000).toLocaleString();
    document.getElementById('resultMonthly').textContent = '$ ' + monthlyPremium.toLocaleString();
    document.getElementById('resultAnnual').textContent = '$ ' + annualPremium.toLocaleString();
    document.getElementById('result').style.display = 'block';
}
