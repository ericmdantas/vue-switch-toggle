<template>
    <div class="switch-toggle__container">
        <input :id="idSwitch" 
            class="switch-toggle switch-toggle--shadow" 
            type="checkbox" 
            v-model="propCheckMutable" />
        <label :for="idSwitch"></label>
        <span class="switch-toggle-description" v-show="propCheckMutable">{{labelCheckedDescription}}</span>
        <span class="switch-toggle-description" v-show="!propCheckMutable">{{labelUncheckedDescription}}</span>
    </div>
</template>

<script>
import uuid from 'uuid/v4' // random

export default {
    name: 'SwitchToggle',
    props: {
        propCheck: {
          type: Boolean,
          default: false,
        },
        labelCheckedDescription: {
          type: String,
          default: "",
        },
        labelUncheckedDescription: {
          type: String,
          default: "",
        },
    },
    data() {
      return {
        idSwitch: `switch-toggle-id-${uuid()}`,
        propCheckMutable: this.propCheck,
      }
    },
    watch: {
      propCheckMutable() {
        this.$emit('updated', this.propCheckMutable)
      },
    },
}
</script>

<style lang="scss" scoped>
$default-spacing: 15px;
$primary-color: #007bff;

.switch-toggle__container {
  position: relative;
  margin-top: $default-spacing;
  margin-bottom: $default-spacing;
  min-height: 25px;

  .switch-toggle {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;
  }

  .switch-toggle + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .switch-toggle--shadow + label {
    position: absolute;    
    right: 0;
    padding: 2px;
    width: 45px;
    height: 25px;
    background-color: #dddddd;
    border-radius: 60px;
  }

  .switch-toggle--shadow + label:before,
  .switch-toggle--shadow + label:after {
    content: "";
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
  }

  .switch-toggle--shadow + label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: background 0.4s;
  }

  .switch-toggle--shadow + label:after {
    width: 25px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
  }

  .switch-toggle--shadow:checked + label:before {
    background-color: $primary-color;
  }

  .switch-toggle--shadow:checked + label:after {
    transform: translateX(18px);
  }

  .switch-toggle-description {
    position: absolute;
    top: 0;
  }
}
</style>
