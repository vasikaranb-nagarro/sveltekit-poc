<script >
  import { onMount } from "svelte";
  // import { SimpleComponent } from "simple-comp"; 

  //  import dayjs from 'dayjs';

  // console.log(dayjs('2019-01-25').format('YYYY-MM-DDTHH:mm:ssZ[Z]'));

    // onMount(async () => {

	// importShim("simple-comp").then(
    //   (mod) => {
    //     console.log(mod);
    //   },
    //   (err) => {
    //     console.log( err);
    //   })
	// });
</script>

<simple-component message={"hello"} />

<div />

<style>
  .theme {
    display: flex;
    justify-content: space-around;
    margin-right: -15rem;
    margin-bottom: 1rem;
  }
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-switch::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 2px;
    left: 2px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  .toggle-switch.dark {
    background-color: #444;
  }

  .toggle-switch.dark::before {
    transform: translateX(20px);
  }

  .toggle-switch-label {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
  .toggle-switch-label input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .toggle-switch-label span {
    margin-right: 0.8rem;
  }
  .logout {
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    width: 96px;
    height: 37px;
    padding: 10px;
    background-color: #0c0a09;
    color: #fff;
  }
  .header {
    display: flex;
    padding: 15px;
    height: 70px;
    flex-direction: row-reverse;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
