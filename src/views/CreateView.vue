<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonInput, IonButton, IonRadioGroup, IonRadio, IonItemGroup, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { PI } from '@/dto/mfen.dto';
import { Ref, ref } from 'vue';

const inputs: Ref<PI[]> = ref([])

function add(p: PI) {
  if (inputs.value.length <= 13) {
    inputs.value.push(p)
  }
}

function remove() {
  if (inputs.value.length > 0) {
    inputs.value = inputs.value.slice(0, inputs.value.length - 1)
  }
}

function removeAll() {
  inputs.value = []
}
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>問題作成</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <template v-for="p in Object.values(PI)">
        <IonText class="mahjong" @click="add(p)">{{ p }}</IonText>
      </template>
      <IonInput class="mahjong" :value="inputs.join('')" disabled>
      </IonInput>
      <IonItemGroup>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton fill="outline" @click="remove">一文字削除</IonButton>
            <IonButton fill="outline" @click="removeAll">全消去</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      </IonItemGroup>
    </IonContent>
  </IonPage>
</template>

<style lang="scss" scoped>
ion-content {
  user-select: none;
}

ion-input {
  &.mahjong {
    font-family: "Mahjong";
    font-size: 5rem;
    cursor: pointer;
  }
}

ion-text {
  &.mahjong {
    font-family: "Mahjong";
    font-size: 5rem;
    cursor: pointer;

    &:hover {
      color: red;
    }

    &.selected {
      color: red;
    }
  }

  &.mahjong-dora {
    font-family: "Mahjong";
    font-size: 5rem;
  }
}
</style>
