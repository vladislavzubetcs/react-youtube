const Header = () => {
  return (
    <header className="py-2.5 md:py-5 px-4 md:px-8">
      <div className="grid grid-cols-header md:grid-cols-header-desktop">
        <div className="flex gap-4 items-center">
          <button className="max-md:hidden flex w-10 h-10 shrink-0 justify-center items-center outline-none rounded-full transition-all hover:bg-transparent-light-gray active:bg-light-gray"
                  type="button">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.6364 3H1.36364C0.61 3 0 2.328 0 1.5C0 0.672 0.61 0 1.36364 0H18.6364C19.3891 0 20 0.672 20 1.5C20 2.328 19.3891 3 18.6364 3ZM1.36364 7H18.6364C19.3891 7 20 7.672 20 8.5C20 9.328 19.3891 10 18.6364 10H1.36364C0.61 10 0 9.328 0 8.5C0 7.672 0.61 7 1.36364 7ZM18.6364 14H1.36364C0.61 14 0 14.672 0 15.5C0 16.328 0.61 17 1.36364 17H18.6364C19.3891 17 20 16.328 20 15.5C20 14.672 19.3891 14 18.6364 14Z"
                    fill="#1F2022"/>
            </svg>
          </button>
          <a href="#" className="flex items-center gap-1">
            <div>
              <svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.6148 24.8219L19.132 24.9575C19.144 24.9575 19.1679 24.9575 19.1679 24.9752C23.354 25.0518 27.4326 24.8101 31.6068 24.5094C34.9378 24.2794 35.7272 21.8974 36.1398 19.0554C36.6541 15.6238 36.7677 12.1509 36.4986 8.69571C36.4858 8.53257 36.4733 8.36796 36.4608 8.20233C36.2106 4.89591 35.9293 1.17908 31.9656 0.494059C31.1224 0.346653 30.2612 0.216936 29.406 0.193351C21.3088 -0.0660825 13.1398 -0.130941 5.02461 0.423304C2.62056 0.576606 1.06569 1.97991 0.670997 4.3325C-0.0286908 8.52472 -0.172217 12.829 0.198558 17.0566C0.203186 17.1083 0.20781 17.1601 0.212447 17.2122C0.47751 20.1861 0.787238 23.6611 4.35482 24.3797C6.2755 24.7736 8.23105 24.7893 10.1903 24.8051C10.6651 24.8089 11.1401 24.8127 11.6148 24.8219ZM18.6708 15.5219C17.3569 16.2664 16.0401 17.0126 14.7126 17.7641V7.16269C16.1423 7.97128 17.562 8.77616 18.9832 9.58186C20.671 10.5387 22.3607 11.4967 24.0717 12.4634C22.2639 13.4858 20.4702 14.5022 18.6708 15.5219Z"
                      fill="#FF0000"/>
              </svg>
            </div>
            <div>
              <svg width="75" height="24" viewBox="0 0 75 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M56.7244 22.7469L56.7245 22.7464C56.8083 22.4308 56.8947 22.1052 56.9888 21.7264C57.0615 21.8263 57.1196 21.9084 57.1699 21.9795L57.1699 21.9796C57.2353 22.072 57.2875 22.1458 57.3416 22.2157C58.9024 24.2381 62.048 23.8844 63.0109 21.5495C63.3039 20.8419 63.5371 20.0695 63.573 19.3148C63.6627 16.8443 63.6986 14.3797 63.6507 11.9091C63.6268 10.9481 63.4295 9.96339 63.1245 9.04358C62.652 7.56362 61.3184 6.88556 59.7576 7.18626C58.7768 7.38674 58.0174 7.9056 57.4313 8.70159C57.3963 8.74667 57.359 8.79054 57.3121 8.84556L57.312 8.84566C57.2547 8.91298 57.1831 8.99698 57.0844 9.12023V0.865509H53.6518V23.2417H56.5941C56.6373 23.0754 56.6805 22.9125 56.7244 22.7469ZM57.1562 19.6627V15.5707V11.4787C57.1562 10.7889 57.4911 10.27 58.0413 9.90442C58.7709 9.42683 59.5124 9.66858 59.7815 10.4882C59.9251 10.9422 60.0387 11.4257 60.0387 11.8915C60.0207 14.3973 59.9609 16.8974 59.8951 19.3974C59.8892 19.6627 59.7755 19.928 59.6619 20.1815C59.3928 20.7889 58.8546 21.0424 58.1908 20.8891C57.515 20.7358 57.1562 20.329 57.1562 19.6627ZM47.827 7.50466H51.4212V23.2535H48.6164C48.5242 22.7134 48.432 22.1588 48.3264 21.5237L48.3264 21.5234L48.2935 21.3254C48.1691 21.5055 48.0776 21.6433 47.9959 21.7663L47.9958 21.7663L47.9956 21.7667L47.9952 21.7673C47.9515 21.8331 47.9105 21.8947 47.8689 21.9563C46.936 23.283 45.6143 23.737 44.0535 23.4952C42.7199 23.283 41.9185 22.2688 41.7391 20.6061C41.6853 20.1108 41.6614 19.6096 41.6614 19.1143C41.6534 16.6571 41.6561 14.1947 41.6587 11.734V11.7327V11.7314V11.7301V11.7288V11.7275V11.7262V11.7248C41.6601 10.4982 41.6614 9.27201 41.6614 8.04711V7.49287H45.2974V8.13556C45.2974 9.026 45.2966 9.91607 45.2959 10.806C45.2936 13.4752 45.2914 16.1427 45.3093 18.8136C45.3093 19.3207 45.3632 19.8455 45.4529 20.3525C45.5545 20.8714 45.9373 21.0601 46.4516 21.0247C47.2828 20.9598 47.8569 20.3525 47.8569 19.5389V8.20041C47.827 7.97046 47.827 7.7582 47.827 7.50466ZM26.6929 7.49287H23.0808L23.0748 7.9174C23.0748 11.744 23.0748 15.5884 23.0868 19.415C23.0868 19.8926 23.1346 20.3643 23.2004 20.8419C23.4396 22.369 24.223 23.3006 25.5028 23.4893C27.0995 23.7311 28.4092 23.2358 29.3421 21.8856C29.4438 21.7264 29.5454 21.5731 29.7248 21.3077C29.7858 21.6603 29.8404 21.9786 29.8915 22.2768L29.8918 22.2789C29.9509 22.6233 30.0053 22.9409 30.0597 23.2535H32.8525V7.51645H29.2584V8.224V19.5035C29.2524 20.3231 28.756 20.8832 27.9368 20.9952C27.3447 21.0719 26.9979 20.8832 26.8603 20.2995C26.7527 19.8042 26.7048 19.2794 26.7048 18.7723C26.6869 16.1238 26.6891 13.4719 26.6914 10.8168C26.6921 9.93126 26.6929 9.04538 26.6929 8.15914V7.49287ZM21.2269 15.9009C21.2174 16.3254 21.1925 16.75 21.1676 17.1745C21.1614 17.2806 21.1552 17.3867 21.1492 17.4929C21.1373 17.6299 21.126 17.7719 21.1144 17.9177C20.9911 19.4655 20.8336 21.4431 19.6422 22.5047C18.8109 23.2358 17.7584 23.5011 16.67 23.5365C16.1856 23.5483 15.6952 23.5483 15.2108 23.4834C12.9204 23.1415 11.8559 22.145 11.4732 19.6627C11.0366 16.7971 11.0007 13.8844 11.521 11.0188C12.0592 8.05301 13.9131 7.00348 16.7956 7.19806C19.4867 7.38674 20.6887 9.12612 21.0057 11.6025C21.1791 13.0235 21.2628 14.4622 21.2269 15.9009ZM17.5709 14.4937C17.569 14.7822 17.567 15.0706 17.567 15.3584C17.567 16.2922 17.5305 17.2261 17.494 18.158L17.494 18.1581L17.494 18.1583L17.494 18.1584L17.494 18.1586C17.4773 18.5857 17.4606 19.0125 17.4474 19.4386C17.4474 19.7806 17.3278 20.1285 17.1903 20.4469C17.0168 20.8596 16.7059 21.0896 16.2334 21.0896C15.749 21.0896 15.3782 20.8537 15.2347 20.4233C14.8623 19.3124 14.9024 18.1172 14.9419 16.9389C14.9525 16.6225 14.9631 16.3073 14.9656 15.9952C14.9776 14.415 14.9895 12.829 14.9895 11.2488C14.9895 11.0321 15.0533 10.8101 15.1157 10.5928L15.1271 10.553C15.3184 9.93391 15.6892 9.61551 16.2155 9.60372C16.7537 9.59192 17.1843 9.91032 17.3278 10.5766C17.4534 11.1544 17.5311 11.744 17.5551 12.3278C17.5807 13.0482 17.5758 13.7716 17.5709 14.4937ZM6.45323 11.1582L6.45327 11.158L6.45329 11.1579C6.67981 10.0565 6.90369 8.96786 7.14346 7.87612C7.3351 6.99161 7.53706 6.1071 7.73916 5.222L7.73917 5.22199C7.97221 4.20134 8.20544 3.17991 8.42323 2.15678C8.52489 1.69098 8.71626 1.57895 9.16478 1.59074C9.84944 1.6159 10.5432 1.61124 11.2567 1.60645C11.5466 1.60451 11.8398 1.60254 12.137 1.60254C11.8295 2.71762 11.5271 3.78301 11.2297 4.83063L11.2297 4.83069L11.2297 4.83071L11.2297 4.83079L11.1502 5.11079C10.1276 8.68391 9.10498 12.2688 8.09432 15.8537C8.01657 16.1308 7.98069 16.4315 7.98069 16.7264C7.97272 18.0312 7.97538 19.3334 7.97803 20.6364V20.6365V20.6365V20.6366C7.97936 21.2884 7.98069 21.9404 7.98069 22.5931V23.2299H4.47029C4.46631 23.1709 4.46099 23.112 4.45567 23.053C4.44504 22.9351 4.43441 22.8172 4.43441 22.6992C4.43441 22.3453 4.42527 21.9908 4.41612 21.6364C4.39664 20.8809 4.37717 20.1262 4.44637 19.3797C4.67084 17.079 4.05229 14.94 3.434 12.802C3.34399 12.4908 3.25399 12.1796 3.1666 11.8679C2.7121 10.2464 2.25462 8.622 1.79713 6.99759C1.33964 5.37318 0.88215 3.74877 0.42765 2.1273C0.400867 2.04148 0.383455 1.95196 0.364922 1.85668C0.35035 1.78176 0.335085 1.70328 0.314026 1.62023H3.89619C4.6497 5.19924 5.40919 8.77824 6.19858 12.3926C6.28446 11.9788 6.36903 11.5676 6.45323 11.1582ZM68.8296 16.5023H74.8816C74.8816 15.7716 74.888 15.0609 74.8942 14.3598C74.9016 13.5392 74.9088 12.7318 74.9055 11.9209C74.8816 11.2665 74.768 10.6061 74.6125 9.96339C74.2716 8.59546 73.4882 7.55183 72.0171 7.29829C71.1081 7.14499 70.1572 7.10961 69.2363 7.19806C67.5439 7.36315 66.4495 8.34782 65.9472 9.95159C65.8216 10.3407 65.7079 10.724 65.6422 11.1249C65.2714 13.5306 65.3372 15.954 65.5166 18.3537C65.5824 19.3266 65.8873 20.2995 66.2103 21.2311C66.5571 22.2275 67.3286 22.8761 68.3632 23.1768C69.7625 23.5837 71.1679 23.5837 72.5374 23.053C74.2776 22.3867 75.3122 20.2287 74.7381 18.5483C74.0446 18.5193 73.3452 18.4815 72.6357 18.4432L72.6347 18.4432L72.6341 18.4432C72.3346 18.427 72.0334 18.4107 71.73 18.395L71.7245 18.4976L71.7245 18.4979L71.7245 18.4985C71.7094 18.7781 71.6976 18.9975 71.6762 19.2028C71.6523 19.4622 71.6164 19.7157 71.5626 19.9693C71.3951 20.7476 70.9765 21.1014 70.2589 21.0896C69.5712 21.0837 69.1346 20.7476 69.0449 19.9634C68.9541 19.1492 68.9165 18.3288 68.8777 17.4845L68.8777 17.484L68.8777 17.4836C68.8628 17.1604 68.8478 16.8336 68.8296 16.5023ZM71.443 14.4327C71.443 14.1331 71.4438 13.8381 71.4445 13.5463C71.4467 12.6838 71.4489 11.85 71.431 11.0129C71.431 10.7476 71.3294 10.4705 71.2277 10.2169C71.0244 9.72164 70.5998 9.58603 70.0915 9.58603C69.5831 9.58603 69.2602 9.83957 69.1346 10.2936C68.822 11.4062 68.8485 12.5386 68.8753 13.6778C68.8812 13.9331 68.8872 14.1887 68.8894 14.4445C69.8044 14.4327 70.6357 14.4327 71.443 14.4327ZM32.0691 4.49169H35.6273L35.6333 23.2299H39.1557V4.474H42.69V1.64971H32.0691V4.49169Z"
                      fill="black"/>
              </svg>
            </div>
          </a>
        </div>
        <form className="bg-transparent-light-gray rounded-3xl py-1.5 pl-6 pr-3 flex justify-between items-center gap-3">
          <input className="bg-transparent outline-none w-full" type="text" placeholder="Search"/>
          <button className="flex w-10 h-10 shrink-0 justify-center items-center outline-none" type="submit">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643496 2.34317 2.34317C-0.643496 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z"
                    fill="black"/>
            </svg>
          </button>
        </form>
        <div className="max-md:hidden flex justify-end items-center gap-10">
          <button className="flex w-10 h-10  shrink-0 justify-center items-center outline-none rounded-full transition-all hover:bg-transparent-light-gray active:bg-light-gray" type="submit">
            <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M22.2082 2.86766L18.4091 5.68182V2.50266C18.4091 1.11814 17.3104 0 15.955 0H2.4541C1.09644 0 0 1.12048 0 2.50266V17.4973C0 18.8819 1.09874 20 2.4541 20H15.955C17.3126 20 18.4091 18.8795 18.4091 17.4973V14.3182L22.2082 17.1323C22.48 17.3336 22.9801 17.5 23.32 17.5H25.7691C26.456 17.5 27 16.939 27 16.2469V3.75309C27 3.06064 26.4489 2.5 25.7691 2.5H23.32C22.9732 2.5 22.4823 2.66461 22.2082 2.86766ZM2.45455 17.5V2.5H15.9545V17.5H2.45455ZM4.90909 13.75C4.90909 13.0596 5.45956 12.5 6.13996 12.5H12.2691C12.9489 12.5 13.5 13.0548 13.5 13.75C13.5 14.4404 12.9495 15 12.2691 15H6.13996C5.46017 15 4.90909 14.4452 4.90909 13.75ZM23.5108 14.9998L18.424 11.238L18.4243 8.76179L23.5073 4.9966L24.5455 4.99818V14.9988L23.5108 14.9998Z" fill="black"/>
            </svg>
          </button>
          <button className="flex w-10 h-10 shrink-0 justify-center items-center outline-none rounded-full transition-all hover:bg-transparent-light-gray active:bg-light-gray" type="submit">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 3.88071 1.11929 5 2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5ZM2.5 13C1.11929 13 0 11.8807 0 10.5C0 9.11929 1.11929 8 2.5 8C3.88071 8 5 9.11929 5 10.5C5 11.8807 3.88071 13 2.5 13ZM2.5 21C1.11929 21 0 19.8807 0 18.5C0 17.1193 1.11929 16 2.5 16C3.88071 16 5 17.1193 5 18.5C5 19.8807 3.88071 21 2.5 21ZM10.5 21C9.11929 21 8 19.8807 8 18.5C8 17.1193 9.11929 16 10.5 16C11.8807 16 13 17.1193 13 18.5C13 19.8807 11.8807 21 10.5 21ZM16 18.5C16 19.8807 17.1193 21 18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5ZM10.5 13C9.11929 13 8 11.8807 8 10.5C8 9.11929 9.11929 8 10.5 8C11.8807 8 13 9.11929 13 10.5C13 11.8807 11.8807 13 10.5 13ZM8 2.5C8 3.88071 9.11929 5 10.5 5C11.8807 5 13 3.88071 13 2.5C13 1.11929 11.8807 0 10.5 0C9.11929 0 8 1.11929 8 2.5ZM18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13ZM16 2.5C16 3.88071 17.1193 5 18.5 5C19.8807 5 21 3.88071 21 2.5C21 1.11929 19.8807 0 18.5 0C17.1193 0 16 1.11929 16 2.5Z" fill="black"/>
            </svg>
          </button>
          <button className="flex w-10 h-10 shrink-0 justify-center items-center outline-none relative rounded-full transition-all hover:bg-transparent-light-gray active:bg-light-gray" type="submit">
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM9.77778 22.4545C9.77778 23.1083 10.3244 23.6364 11 23.6364C11.6709 23.6364 12.2201 23.1064 12.2222 22.4545H9.77778ZM17.7222 11.2318V16.9427C17.7222 17.2702 17.9922 17.6032 18.3181 17.6847L18.6385 17.7648C19.1733 17.8984 19.5556 18.3689 19.5556 18.9091C19.5556 19.5624 19.0088 20.0909 18.3307 20.0909H3.66927C2.99369 20.0909 2.44444 19.56 2.44444 18.9091C2.44444 18.3666 2.82517 17.8979 3.36026 17.7647L3.69151 17.6823C4.0153 17.6017 4.27778 17.2732 4.27778 16.9426V11.2256C4.27778 7.63639 7.28675 4.72727 11 4.72727C14.7148 4.72727 17.7222 7.63541 17.7222 11.2318Z" fill="black"/>
            </svg>
            <div className="absolute z-10 right-0 -top-1 w-5 h-5 flex justify-center items-center rounded-full border border-white bg-red pointer-none select-none">
              <span className=" text-white text-xs font-bold">3</span>
            </div>
          </button>
          <button className="flex w-10 h-10 shrink-0 justify-center items-center outline-none relative rounded-full" type="submit">
            <img src="assets/images/user.png" alt="user" width="40" height="40"/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header