document.getElementById("marksForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const marks = [
      parseFloat(document.getElementById("english").value) || 0,
      parseFloat(document.getElementById("hindi").value) || 0,
      parseFloat(document.getElementById("maths").value) || 0,
      parseFloat(document.getElementById("science").value) || 0,
      parseFloat(document.getElementById("socialStudies").value) || 0,
    ];
  
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = ((totalMarks / (80 * 5)) * 100).toFixed(2);
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<span>${percentage}%</span>`;
});
