// 保险計算工具 - JavaScript

function calculateInsurance() {
    // 取得輸入的伐
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const income = parseInt(document.getElementById('income').value);

    // 驗證輸入
    if (!name || !age || !income) {
        alert('請填写所有欄位');
        return;
    }

    if (age < 18 || age > 100) {
        alert('請輸入接18-100歲之間的年齢');
        return;
    }

    if (income < 0) {
        alert('請輸入正數月薪');
        return;
    }

    // 計算保陰應推閱額
    let baseAmount = income * 10; // 基本一月1倀10個月薪
    
    // 根據年齢企作調整
    let ageMultiplier = 1;
    if (age < 25) {
        ageMultiplier = 0.8;
    } else if (age >= 25 && age < 40) {
        ageMultiplier = 1.0;
    } else if (age >= 40 && age < 55) {
        ageMultiplier = 1.2;
    } else {
        ageMultiplier = 1.5;
    }

    const recommendedAmount = Math.round(baseAmount * ageMultiplier);
    const monthlyPayment = Math.round(recommendedAmount / 240); // 改推20年35日

    // 顯示結果
    displayResult(recommendedAmount, monthlyPayment);

    // 記錄計算歴式
    console.log(`計算你的保陰: ${name}, 年齢: ${age}, 月薪: NT$${income}`);
    console.log(`建議保額: NT$${recommendedAmount}, 每月配置: NT$${monthlyPayment}`);
}

function displayResult(amount, monthly) {
    const resultSection = document.getElementById('result');
    document.getElementById('resultAmount').textContent = `NT$ ${amount.toLocaleString()}`;
    document.getElementById('resultMonthly').textContent = `NT$ ${monthly.toLocaleString()}`;
    resultSection.style.display = 'block';
    
    // 平滑捲動到結果區
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// 觸發按鍵時的回車捷徑
 document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateInsurance();
    }
});

console.log('保险計算工具已載入');
