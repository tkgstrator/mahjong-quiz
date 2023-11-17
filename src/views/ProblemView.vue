<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonText, IonButton, IonItem, IonRadio, IonRadioGroup, IonGrid, IonRow, IonCol, onIonViewWillEnter } from '@ionic/vue';
import { MProblem, PI } from '../dto/mfen.dto';
import { Ref, ref, ssrContextKey } from 'vue';
import json from '../assets/mfen.json'
import { plainToInstance } from 'class-transformer';

const problems: MProblem[] = json.map((p) => plainToInstance(MProblem, p))
const index: Ref<number> = ref(Math.floor(Math.random() * problems.length));
console.log(index.value)
const problem: Ref<MProblem> = ref(problems[index.value]);
const is_clear: Ref<boolean | null> = ref(null);
const selected: Ref<number> = ref(-1);

onIonViewWillEnter(() => {
  index.value = Math.floor(Math.random() * problems.length)
  problem.value = problems[index.value]
})

function change() {
  index.value = Math.floor(Math.random() * problems.length)
  problem.value = problems[index.value]
}

function click(index: number) {
  if (index === selected.value) {
    selected.value = -1;
    return;
  } else {
    selected.value = index;
  }
}
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>何切る</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <template v-for="p, index in problem.pieces">
              <IonText class="mahjong" :class="selected === index ? 'selected' : ''" @click="click(index)">{{ p }}
              </IonText>
            </template>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonText class="mahjong-dora">{{ problem.dora }}</IonText>
          </IonCol>
          <IonCol>
            <IonButton fill="outline" @click="change">問題変更</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>
  
<style lang="scss" scoped>
ion-content {
  user-select: none;
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
