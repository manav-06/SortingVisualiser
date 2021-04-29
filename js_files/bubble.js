async function bubbleSort() {

    const arr = document.querySelectorAll(".bar");

    for (let i = 0; i < arr.length; i++) {  

        for (let j = 0; j < arr.length - i - 1; j++) {

            arr[j].style.background = 'blue';
            arr[j + 1].style.background = 'blue';

            if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
                
                await wait(delay);
                swap(arr[j], arr[j + 1]);
            }

            arr[j].style.background = 'cyan';
            arr[j + 1].style.background = 'cyan';

        }
        arr[arr.length - 1 - i].style.background = 'green';
    }

}

const bubbleSortbtn = document.querySelector(".bubbleSort");
bubbleSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubbleSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
